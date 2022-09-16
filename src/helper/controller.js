import cart from "./cart";
import favorite from "./favorite";
import { db } from "../firebase";


const _filterByGender = function (product, genderList) {
    if (genderList.length == 0) return product;
    return product.filter(item => genderList.indexOf(item.product.gender) > -1)
}

const _filterByBrand = function (product, brandList) {
    if (brandList.length == 0) return product;
    console.log(brandList)
    return product.filter(item => brandList.indexOf(item.product.brand) > -1)
}
const _filterByPrice = function (product, priceList) {
    //console.log(priceList)
    if (priceList.length == 0) return product;

    return product.filter(item => {
        return priceList.some(([minPrice, maxPrice]) => minPrice <= item.product.price && maxPrice >= item.product.price)
    })
}

const _filterByCategories = function (product, category) {
    if (category === '') return product;
    return product.filter(item => item.product.category === category)
}

export const filterProduct = function (product, genderList, brandList, priceList, category) {
    let newProduct = product
    newProduct = _filterByGender(newProduct, genderList)
    newProduct = _filterByBrand(newProduct, brandList)
    newProduct = _filterByPrice(newProduct, priceList)
    newProduct = _filterByCategories(newProduct, category)

    return newProduct
}

export const getProduct = (collection, handler) => {

    db.collection(collection).onSnapshot((snapshot) => {
        let tempData = []
        tempData = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                product: doc.data()
            }
        ))
        handler([...tempData])
    })
}

export const addProduct = (product, img = '', collection) => {
    if (collection === 'cart')
        cart.addToList(product, img)
    if (collection === 'favorite')
        favorite.addToList(product, img)
}
export const removeProduct = (product, collection) => {
    if (collection === 'cart')
        cart.removeFromList(product)
    if (collection === 'favorite')
        favorite.removeFromList(product)
}

export const getFavoriteList = () => {
    return favorite._list
}

export const getCartList = () => {
    return cart._list;
}

export const increaseQuantity = (product, collection) => {
    if (collection === 'cart')
        cart.increaseQuantity(product)
    if (collection === 'favorite')
        favorite.increaseQuantity(product)
}
export const decreaseQuantity = (product, collection) => {
    if (collection === 'cart')
        cart.decreaseQuantity(product)
    if (collection === 'favorite')
        favorite.decreaseQuantity(product)
}
export { cart, favorite }