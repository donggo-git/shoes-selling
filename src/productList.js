
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
        price: [],
        brand: {
            Nike: false,
            Puma: false,
            Adidas: false,
            Rebook: false
        },
        categories: { category: "" }
    })
    const filterHandle = (filterEvent) => {
        let newFilterCheckBox = { ...filterCheckBox }
        let targetName = filterEvent.target.name;
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
            if (!filterEvent.target.checked) {
                filterEvent.target.checked = !filterEvent.target.checked
                newFilterCheckBox[targetName].category = targetValue
            }
            else {
                filterEvent.target.checked = !filterEvent.target.checked
            }
            console.log(filterEvent.target.checked)
        }
        else {
            newFilterCheckBox[targetName][targetValue] = !newFilterCheckBox[targetName][targetValue]
        }
        setFilterCheckBox(newFilterCheckBox)
        filterProduct()

    }
    const filterProduct = () => {
        //filter by Checkbox except section price
        filterByCheckbox()
        //filter by price

    }
    //method filter by section
    const filterByCheckbox = () => {
        let newUpdates = [...products]
        //use the for loop to loop thought the filterCheckBox
        //check every section in there
        //filter all products that qualified the section (except the price section)
        for (let section in filterCheckBox) {
            //case section is checked except price
            if (
                !Object.values(filterCheckBox[section]).every(value => value == true)
                && !Object.values(filterCheckBox[section]).every(value => value == false)
                && section != "price"
                && section != "category"
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
        setProducts(newUpdates);

    }
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
    const filterByCategories = (update) => {
        let newUpdates = [...update]
        if (filterCheckBox.categories.category != "") {
            newUpdates.filter(item => (
                item.product.category == filterByCheckbox.categories.category
            ))
        }
        return newUpdates
    }
    console.log(Products)
    return (
        <div>
            <h2 className="title">Product</h2>
            <div className='product-list-container'>
                <FilterForm filterHandle={filterHandle} />
                <div className='product-list-show'>

                    <div className='product-list'>
                        {Products.map((product) => (
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