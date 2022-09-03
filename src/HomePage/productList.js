import React, { useState, useEffect } from 'react'
import './productList.css'
import '../DetailPage/detailPage.css'
import { db } from '../firebase'
import FilterForm from './FilterForm'
import ProductItem from './ProductItem'
import Fade from '@material-ui/core/Fade';
import * as product from '../helper/product'
import filter from '../helper/filter'

function ProductList({ changeDetailProduct,
    addToCart, addToFavorite, filterStyle,
    closeFilter, removeFromFavorite
}) {
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([])
    const [isFilter, setIsFilter] = useState(true)

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
        setIsFilter(false)
        filter.handlerFilterFormChange(targetName, targetValue)
        document.querySelector('.product-list-component').scrollIntoView()
        setTimeout(() => {
            const newProduct = product.filterProduct(products, filter.gender, filter.brand, filter.price, filter.category)
            setFilterProduct(newProduct)
            setIsFilter(true)
        }, 100)

    }

    return (
        <div className="product-list-component">
            <div className='product-list-container'>
                <FilterForm
                    filterHandle={filterHandler}
                    filterStyle={filterStyle}
                    closeFilter={closeFilter}
                />
                <Fade in={isFilter}>
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
                </Fade>
            </div>
        </div>
    )
}
export default ProductList