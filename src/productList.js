import React, { useState, useEffect } from 'react'
import Fade from '@material-ui/core/Fade'
import { takeAllCheckBoxTrue } from './takeAllCheckBoxTrue'
import './productList.css'
import './DetailPage/detailPage.css'
import { db } from './firebase'
import FilterForm from './FilterForm'
import ProductItem from './ProductItem'

import product from './product'
import filter from './filter'

function ProductList({ changeDetailProduct,
    addToCart, addToFavorite, filterStyle,
    closeFilter, removeFromFavorite
}) {
    // filter product by the filter form 

    // list of product after filter
    const [products, setProducts] = useState([]);
    const [animateProduct, setAnimateProduct] = useState(true)

    let Product
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
        })
    }
    useEffect(() => {
        getProduct();
    }, [])
    //handle the filter form
    db.collection('products').onSnapshot((snapshot) => {
        let tempData = [];
        tempData = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                product: doc.data()
            }

        ));
        Product = new product(tempData)
    })

    const filterHandler = (filterEvent) => {
        let targetName = filterEvent.target.name;
        let targetValue = filterEvent.target.value;
        setAnimateProduct(false)
        setTimeout(() => {
            filter.handlerFilterFormChange(targetName, targetValue)
            Product.filterProduct(filter.gender, filter.brand, filter.price, filter.category)
            setProducts(Product._currentProduct)
            setAnimateProduct(true)
        }, 400)
    }

    return (
        <div className="product-list-component">
            <div className='product-list-container'>
                <FilterForm
                    filterHandle={filterHandler}
                    filterStyle={filterStyle}
                    closeFilter={closeFilter}
                />

                <Fade in={animateProduct} timeout={800}>
                    <div className='product-list'>
                        {products.map((product) => (
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