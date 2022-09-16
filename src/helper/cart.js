import list from './list'

class cart extends list {

    getTotal = function (products) {
        return products.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0)
    }
    discount10 = function (products) {
        return Math.round(this.getTotal(products) * 10 / 100, 2)
    }
    discount20 = function (products) {
        return Math.round(this.getTotal(products) * 20 / 100, 2)
    }
}
export default new cart()