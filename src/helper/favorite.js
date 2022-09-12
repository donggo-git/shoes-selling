import list from './list'

class favorite extends list {
    getDiscountCode = function () {
        const randomCode = Math.floor(Math.random() * 3)
        switch (randomCode) {
            case 0: return 'discount10'
            case 1: return ''
            case 2: return 'discount20'
        }
    }
}
export default new favorite()