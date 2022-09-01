
export default new cart([])
export const getTotal = function (products) {
    return products.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0)
}
export const discount10 = function (products) {
    return Math.round(getTotal(products) * 10 / 100, 2)
}
export const discount20 = function (products) {
    return Math.round(getTotal(products) * 20 / 100, 2)
}