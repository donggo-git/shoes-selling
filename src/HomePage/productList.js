import React, { useState, useEffect } from 'react'
import './productList.css'
import '../DetailPage/detailPage.css'
import { db } from '../firebase'
import FilterForm from './FilterForm'
import ProductItem from './ProductItem'

import * as product from '../helper/product'
import filter from '../filter'

function ProductList({ changeDetailProduct,
    addToCart, addToFavorite, filterStyle,
    closeFilter, removeFromFavorite
}) {
    // filter product by the filter form 

    // list of product after filter
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([])

    //get product from firebase
    const getProduct = () => {

        db.collection('products').onSnapshot((snapshot) => {
            let tempData = [];
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }

            ));
            setProducts(tempData)
            setFilterProduct(tempData)
        })
    }
    useEffect(() => {
        getProduct();
    }, [])
    //handle the filter form

    const filterHandler = (filterEvent) => {
        const targetName = filterEvent.target.name;
        const targetValue = filterEvent.target.value;

        filter.handlerFilterFormChange(targetName, targetValue)

        const newProduct = product.filterProduct(products, filter.gender, filter.brand, filter.price, filter.category)
        //console.log(product.filterProduct(products, filter.gender, filter.brand, filter.price, filter.category))
        //console.log(newProduct)
        setFilterProduct(newProduct)
    }

    return (
        <div className="product-list-component">
            <div className='product-list-container'>
                <FilterForm
                    filterHandle={filterHandler}
                    filterStyle={filterStyle}
                    closeFilter={closeFilter}
                />

                <div className='product-list'>
                    {filterProduct?.map((product) => (
                        <ProductItem
                            product={product}
                            changeDetailProduct={changeDetailProduct}
                            addToCart={addToCart}
                            key={product.id}
                            addToFavorite={addToFavorite}
                            removeFromFavorite={removeFromFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList