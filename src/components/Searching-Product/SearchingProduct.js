import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';
import { db } from 'C:/project/shoes_selling/src/firebase'
import './SearchingProduct.css'
import { NavLink } from 'react-router-dom'

function SearchingProduct({ changeDetailProduct }) {

    const [searchInput, setSearchInput] = useState("");
    const [searchList, setSearchList] = useState([]);

    const handleSearch = (searchInput) => {
        setSearchInput(searchInput);
    }
    //search product every time searchInput changes  
    useEffect(() => {
        if (searchInput != "") {
            db.collection('products').onSnapshot((snapshot) => {
                let tempData = []
                tempData = snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        product: doc.data()
                    }
                )).filter(shoe => shoe.product.name.includes(searchInput))
                setSearchList(tempData);
            })
        }
        else setSearchList([]);
    }, [searchInput])

    const handleSearchClick = (product) => {
        changeDetailProduct(product);
        setSearchList([]);
        setSearchInput("");
    }
    return (
        <div className='search-input'>
            <BsSearch className='search-btn' />
            <input type='text' placeholder='Search'
                value={searchInput}
                onChange={(searchInput) => handleSearch(searchInput.target.value)}
            />
            {searchList.length > 0 ? (
                <div className='searchList_container'>
                    <div className='searchList'>
                        {searchList.map((product) => (
                            <NavLink
                                to="/product"
                                className='searchList-item'
                                onClick={() => handleSearchClick(product)}
                            >
                                <img src={product.product.img[0]} height="100px" width="80px" />
                                <p>{product.product.name}</p>
                            </NavLink>
                        ))
                        }
                    </div>
                </div>
            )
                : <div></div>
            }
        </div>
    )
}

export default SearchingProduct
