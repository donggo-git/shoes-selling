
import React, { useState } from 'react'
import { source } from './source'

import './productList.css'
import './detailPage.css'
import Product_detail from './product-detail'
import FilterForm from './FilterForm'
function ProductList({ products }) {

    // filter product by the filter form 

    // list of product after filter
    const [Products, setProducts] = useState([...products])
    const [filterCheckBox, setFilterCheckBox] = useState({
        Gender: {
            Men: false,
            Women: false,
            Unisex: false
        },
        Price: [0, 10000],
        Brand: {
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
        if (filterEvent.name != "Price") {
            newFilterCheckBox[targetName][targetValue] = !newFilterCheckBox[targetName][targetValue]
            setFilterCheckBox(newFilterCheckBox)
        }
        filterProduct()

    }
    const filterProduct = () => {
        //filter by Gender
        let updateProducts = [];
        console.log(!Object.values(filterCheckBox["Gender"]).every(value => value == true)
            && !Object.values(filterCheckBox["Gender"]).every(value => value == false)
        )
        //check if not all gender is true or false 
        if (
            !Object.values(filterCheckBox["Gender"]).every(value => value == true)
            && !Object.values(filterCheckBox["Gender"]).every(value => value == false)) {
            updateProducts = [...Products]
            updateProducts = updateProducts.filter(product => product.product.trending == true)
        }
        else {
            updateProducts = [...Products]
        }
        //filter by Brand

        setProducts(updateProducts);
        console.log(updateProducts);
    }

    return (
        <div>
            <h2 className="title">Product</h2>
            <div className='product-list-container'>
                <FilterForm filterHandle={filterHandle} />
                <div className='product-list-show'>

                    <div className='product-list'>
                        {products.map((product) => (
                            <div key={product.product.id} className='product-item' >
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