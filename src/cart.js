import product from "./product";

class cart extends product {

    getTotal() {
        return this._product.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0)
    }
    discount10() {
        return Math.round(this.getTotal() * 10 / 100, 2)
    }
    discount20() {
        return Math.round(this.getTotal() * 20 / 100, 2)
    }
    increaseQuantity(productID) {
        let product = this._currentProduct.find(item => item.id == productID)
        if (!product.quantity) product.quantity = 1;
        product.quantity++;
    }
    decreaseQuantity(productID) {
        let product = this._currentProduct.find(item => item.id == productID)
        if (product.quantity === 1) this.removeProduct(productID);
        product.quantity--;
    }
}

export default new cart([])