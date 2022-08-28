class product {

    constructor(product) {
        this._product = product
        this._currentProduct = product
    }
    _filterByGender(genderList) {
        if (genderList.length == 0) return;
        this._currentProduct = this._currentProduct.filter(item => genderList.indexOf(item.product.gender) > -1)
    }
    _filterByBrand(brandList) {
        if (brandList.length == 0) return;
        this._currentProduct = this._currentProduct.filter(item => brandList.indexOf(item.product.brand) > -1)
    }
    _filterByPrice(priceList) {
        if (priceList.length == 0) return;
        this._currentProduct = this._currentProduct.filter(item => {
            return priceList.some(([minPrice, maxPrice]) => minPrice <= item.product.price && maxPrice >= item.product.price)
        })
    }
    _filterByCategories(category) {
        if (category === '') return;
        this._currentProduct = this._currentProduct.filter(item => item.product.category === category)
    }
    filterProduct(genderList, brandList, priceList, category) {
        this._currentProduct = this._product
        this._filterByGender(genderList)
        this._filterByBrand(brandList)
        this._filterByPrice(priceList)
        this._filterByCategories(category)
    }

    removeProduct(productID) {
        this._currentProduct = this._currentProduct.filter(item => item.id != productID)
    }
    changeQuantity(productID) {
        let product = this._currentProduct.find(item => item.id == productID)
        if (!product.quantity) product.quantity = 1;
        product.quantity++;
    }
}

export default product