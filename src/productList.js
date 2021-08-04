
import React, { useState, useEffect } from 'react'
import Fade from '@material-ui/core/Fade'
import { BsFilterLeft } from 'react-icons/bs'
import { takeAllCheckBoxTrue } from './takeAllCheckBoxTrue'
import './productList.css'
import './detailPage.css'
import { db } from './firebase'
import FilterForm from './FilterForm'
import ProductItem from './ProductItem'
function ProductList({ setDetailProduct, changeDetailProduct, addToCart, addToFavorite }) {
    // filter product by the filter form 

    // list of product after filter
    const [products, setProducts] = useState([]);
    const [orgProduct, setOrgProduct] = useState([]);
    const [animateProduct, setAnimateProduct] = useState(true)
    const [scroll, setScroll] = useState(document.documentElement.scrollTop)
    const [filterCheckBox, setFilterCheckBox] = useState({
        gender: {
            Men: false,
            Women: false,
            Unisex: false
        },
        price: [],
        brand: {
            Nike: false,
            Puma: false,
            Adidas: false,
            Rebook: false
        },
        categories: { category: "" }
    })
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
            setOrgProduct(tempData)
            setProducts(tempData)
        })
    }
    useEffect(() => {
        setTimeout(getProduct(), 3000);
    }, [])
    //handle the filter form
    const filterHandle = (filterEvent) => {
        setAnimateProduct(false)
        let newFilterCheckBox = { ...filterCheckBox }
        let targetName = filterEvent.target.name
        let targetValue = filterEvent.target.value
        if (targetName == "price") {
            //check if that value already exist in filterCheckBox[price]
            if (newFilterCheckBox["price"].indexOf(targetValue) < 0) {
                newFilterCheckBox["price"].push(targetValue)
            }
            //if it is remove it
            else {
                newFilterCheckBox["price"].splice(
                    newFilterCheckBox["price"].indexOf(targetValue), 1
                )
            }
        }
        else if (targetName == "categories") {
            newFilterCheckBox[targetName].category = targetValue
        }
        else {
            newFilterCheckBox[targetName][targetValue] = !newFilterCheckBox[targetName][targetValue]
        }
        setFilterCheckBox(newFilterCheckBox)
        filterProduct()
    }
    //filter product from price, gender, sport etc.
    const filterProduct = () => {
        setAnimateProduct(false)
        let newUpdates = [...orgProduct]
        //use the for loop to loop thought the filterCheckBox
        //check every section in there
        //filter all products that qualified the section (except the price section)
        for (let section in filterCheckBox) {
            //case section is checked except price
            if (
                !Object.values(filterCheckBox[section]).every(value => value == true)
                && !Object.values(filterCheckBox[section]).every(value => value == false)
                && section != "price"
                && section != "categories"
            ) {
                newUpdates = newUpdates.filter(item => (
                    takeAllCheckBoxTrue(section, filterCheckBox).indexOf(`${item.product[section]}`) >= 0
                ))
            }
            //case price section is checked
            else if (section == "price") {
                newUpdates = filterByPrice(newUpdates)
            }
            else if (section == 'categories') {
                newUpdates = filterByCategories(newUpdates)
            }
        }
        setTimeout(() => {
            setProducts(newUpdates)
            setAnimateProduct(true)
        }, 300);
    }
    //filter by price
    const filterByPrice = (update) => {
        let newUpdates = [...update];
        let filterElement = []
        //convert all string in filterCheckBox.price to array of number
        let arrPrice = filterCheckBox.price.map(price => {
            return price.split(",").map(deeperPrice => Number(deeperPrice))
        })
        //if price section is checked filter
        if (filterCheckBox.price.length != 0) {
            for (let item = 0; item < newUpdates.length; item++)
                //if some item price qualified the arrPrice push item to filterElement 
                //and assign newUpdate to filterElement
                if (arrPrice.some(price => (
                    newUpdates[item].product.price >= Math.min(...price)
                    && newUpdates[item].product.price <= Math.max(...price)
                ))) {
                    filterElement.push(newUpdates[item])
                }
            newUpdates = filterElement
        }
        //if not return back to the org
        return newUpdates
    }
    //filter by category
    const filterByCategories = (update) => {
        let newUpdates = [...update]
        if (filterCheckBox.categories.category !== "") {
            newUpdates = newUpdates.filter(item => (
                item.product.category == filterCheckBox.categories.category
            ))
        }

        return newUpdates
    }
    console.log(window.screen.width)
    return (
        <div>
            <h2 className="title">Product</h2>
            <div className='product-list-container'>
                <FilterForm filterHandle={filterHandle} />
                <div
                    style={window.screen.width <= 1000 ? { display: 'inline' } : { display: 'none' }}
                    className='filter_responsive_btn'>
                    <p>Filter </p>
                    <BsFilterLeft />
                </div>
                <Fade in={animateProduct} timeout={800}>
                    <div className='product-list'>
                        {products.map((product) => (
                            <ProductItem
                                product={product}
                                changeDetailProduct={changeDetailProduct}
                                addToCart={addToCart}
                                key={product.id}
                                addToFavorite={addToFavorite}
                            />
                        ))}
                    </div>
                </Fade>

            </div>
        </div>
    )
}
export default ProductList