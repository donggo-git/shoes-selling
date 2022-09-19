class list {
    _list
    constructor() {
        this._list = []
    }

    findItemIndex = function (product) {
        const cartsID = this._list.map(item => item.id)
        return cartsID.indexOf(product.id)
    }


    addToList = function (product, img = 0) {
        if (this._list.some(item => item.id == product.id)) {
            this.increaseQuantity(product)
        }
        else {
            this._list.push({
                id: img ? product.id + "_" + img : product.id,
                product: {
                    name: product.product.name,
                    description: product.product.description,
                    gender: product.product.gender,
                    category: product.product.category,
                    //for cart there only one img per product
                    //for favorite there are multiple img per product
                    img: img !== '' ? product.product.img[img] : product.product.img,
                    price: product.product.price,
                    quantity: 1
                }
            })
            console.log(this._list[this._list.length - 1])
        }
    }

    removeFromList = function (product) {
        this._list.splice(this.findItemIndex(product), 1);
    }

    increaseQuantity = function (product) {
        this._list[this.findItemIndex(product)].product.quantity += 1
    }
    decreaseQuantity = function (product) {
        const item = this._list[this.findItemIndex(product)]
        //if quantity of product is decreased to zero remove product from list
        if (item.product.quantity > 1)
            item.product.quantity -= 1
        else
            this.removeFromList(product)
    }
    listLength = function () {
        return this._list.length;
    }
}

export default list