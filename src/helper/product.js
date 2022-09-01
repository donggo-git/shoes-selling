
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
