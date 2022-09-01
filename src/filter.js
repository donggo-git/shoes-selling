class filter {
    gender = []
    brand = []
    price = []
    category = ''
    handlerFilterFormChange(filterName, filterValue) {
        switch (filterName) {
            case 'gender':
                this.gender.indexOf(filterValue) < 0 ?
                    this.gender.push(filterValue) :
                    this.gender.splice(this.gender.indexOf(filterValue), 1)
                break;
            case 'brand':
                this.brand.indexOf(filterValue) < 0 ?
                    this.brand.push(filterValue) :
                    this.brand.splice(this.brand.indexOf(filterValue), 1)
                break;
            case 'price':
                const priceArr = filterValue.split(',').map(price => +price)
                console.log(this.price.some(priceList => JSON.stringify(priceList) === JSON.stringify(priceArr)))
                console.log(this.price.map(price => JSON.stringify(price)))

                this.price.some(priceList => JSON.stringify(priceList) === JSON.stringify(priceArr)) ?
                    this.price = this.price.filter(price => JSON.stringify(price) !== JSON.stringify(priceArr)) :
                    this.price.push(priceArr)
                /*console.log(this.price.map(price => JSON.stringify(price)))
                console.log(this.price.some(priceList => JSON.stringify(priceList) === JSON.stringify(priceArr)))
                this.price.some(priceList => JSON.stringify(priceList) !== JSON.stringify(priceArr)) ?
                    this.price.push(priceArr) :
                    this.price.filter(price => JSON.stringify(price) !== JSON.stringify(priceArr))*/
                break;
            case 'categories':
                this.category === filterValue ?
                    this.category = '' :
                    this.category = filterValue
        }
    }
}

export default new filter()