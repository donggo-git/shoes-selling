
import React, { useState } from 'react'
import { source } from './source'
import { takeAllCheckBoxTrue } from './takeAllCheckBoxTrue'
import './productList.css'
import './detailPage.css'
import Product_detail from './product-detail'
import FilterForm from './FilterForm'
function ProductList({ products }) {

    // filter product by the filter form 

    // list of product after filter
    const [Products, setProducts] = useState([...products])
    const [filterCheckBox, setFilterCheckBox] = useState({
        gender: {
            Men: false,
            Women: false,
            Unisex: false
        },
        price: [0, 10000],
        brand: {
            Nike: false,
            Puma: false,
            Adidas: false,
            Rebook: false
        }
    })
    const filterHandle = (filterEvent) => {
        let newFilterCheckBox = { ...filterCheckBox }
        let targetName = filterEvent.target.name;
        let targetValue = filterEvent.target.value
        if (filterEvent.name != "price") {
            newFilterCheckBox[targetName][targetValue] = !newFilterCheckBox[targetName][targetValue]
            setFilterCheckBox(newFilterCheckBox)
        }

        filterProduct(filterEvent.target.name)

    }
    const filterProduct = (section) => {
        //filter by Gender
        filterBySection()
    }
    //method filter by section
    const filterBySection = () => {
        let newUpdates = [...products]
        //use the for loop to loop thought the filterCheckBox
        //check every section in there
        //filter all products that qualified the section (except the price section)
        for (let section in filterCheckBox) {
            if (
                !Object.values(filterCheckBox[section]).every(value => value == true)
                && !Object.values(filterCheckBox[section]).every(value => value == false)
                && section != "price"
            ) {
                newUpdates = newUpdates.filter(item => (
                    takeAllCheckBoxTrue(section, filterCheckBox).indexOf(`${item.product[section]}`) >= 0
                ))
            }
        }
        setProducts(newUpdates);

    }

    console.log(Products)
    return (
        <div>
            <h2 className="title">Product</h2>
            <div className='product-list-container'>
                <FilterForm filterHandle={filterHandle} />
                <div className='product-list-show'>

                    <div className='product-list'>
                        {products.map((product) => (
                            <div key={product.id} className='product-item' >
                                <img src={product.product.img[0]} height='100%' width='100%' alt={product.name + ' shoes'} />
                                <div className='product-detail'>
                                    <h3>{product.product.name}</h3>
                                    <p className='brand'>{product.product.brand}</p>
                                    <p>${product.product.price}</p>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </div>
        </div>
    )
}
export default ProductList