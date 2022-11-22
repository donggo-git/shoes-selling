import React, { useState, useEffect } from 'react'
import './productList.css'
import '../DetailPage/detailPage.css'
import FilterForm from './FilterForm'
import ProductItem from './ProductItem'
import Fade from '@material-ui/core/Fade';
import * as product from '../../helper/controller'
import filter from '../../helper/filter'
import Card from '../../UI/Card'

function ProductList({ changeDetailProduct,
    filterStyle,
    closeFilter,
    addProduct,
    addToFavoriteHandler
}) {
    const [products, setProduct] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    const [isFilter, setIsFilter] = useState(true)
    //get product from firebase
    useEffect(() => {
        //getProduct();
        product.getProduct('products', setProduct)
        product.getProduct('products', setFilterProduct)
        //get filter form sticky when scrolling
        const TrendingProducts = document.querySelector('.Trending_container')
        const filter = document.querySelector('.filter')
        const stickyFilterForm = function (entries) {
            const [entry] = entries
            //if passing out the trending products filter will sticky
            if (!entry.isIntersecting) filter.classList.add('filter_fixed')
            //if not, not sticky
            else filter.classList.remove('filter_fixed')
        }

        const filterObserver = new IntersectionObserver(stickyFilterForm, {
            root: null,
            threshold: 0,
            rootMargin: '22px'
        })

        filterObserver.observe(TrendingProducts)
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
                <Fade in={isFilter} timeout={100}>
                    <div className='product-list'>

                        {filterProduct?.map((product) => (
                            <Card
                                product={product}
                                key={product.id}
                                btn1={"Like"}
                                btn2={"Detail"}
                                btn1Method={addToFavoriteHandler}
                                btn2Method={changeDetailProduct}
                                collection="product"
                            />
                        ))}

                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default ProductList