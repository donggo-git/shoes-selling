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
                this.price.indexOf(filterValue) < 0 ?
                    this.price.push(filterValue) :
                    this.price.splice(this.price.indexOf(filterValue), 1)
                break;
            case 'categories':
                this.category === filterValue ?
                    this.category = '' :
                    this.category = filterValue
        }
    }
}

export default new filter()