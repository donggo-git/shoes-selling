import React from 'react'
import './FilterProduct.css'

function FilterProuct(props) {
    let categories = ['Soccer', 'Training', 'Basketball', 'Running', 'Football']
    const handleFilter = (e) => {

    }
    return (
        <div className='filter'>
            <div className='filter__line'>
                <p>Gender</p>
                <div>
                    <input type='checkbox' value='Men' name='Gender' onChange={(e) => props.FilterProduct(e)} />
                    <label>Men</label>
                </div>
                <div>
                    <input type='checkbox' value='Women' name='Gender' onChange={(e) => props.FilterProduct(e)} />
                    <label>Women</label>
                </div>
                <div>
                    <input type='checkbox' value='Unisex' name='Gender' onChange={(e) => props.FilterProduct(e)} />
                    <label>Unisex</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Shop by Price</p>
                <div>
                    <input type='checkbox' value={[0, 25]} name='PriceFilter' onChange={(e) => props.FilterProduct(e)} />
                    <label for='0-25'>$0-$25</label>
                </div>
                <div>
                    <input type='checkbox' value={[25, 50]} name='PriceFilter' onChange={(e) => props.FilterProduct(e)} />
                    <label for='25-50'>$25-$50</label>
                </div>
                <div>
                    <input type='checkbox' value={[25, 100]} name='PriceFilter' onChange={(e) => props.FilterProduct(e)} />
                    <label for='50-100'>$50-$100</label>
                </div>
                <div>
                    <input type='checkbox' value={[100, 150]} name='PriceFilter' onChange={(e) => props.FilterProduct(e)} />
                    <label for='100-150'>$100-$150</label>
                </div>
                <div>
                    <input type='checkbox' value={[150, 10000]} name='PriceFilter' onChange={(e) => props.FilterProduct(e)} />
                    <label for='150-10000'>Over $150</label>
                </div>
            </div>
            <div className='filter__line category'>
                {categories.map((category) => (
                    <div className='category__label'>
                        <input type='radio' value={category} name='categories' onChange={(e) => handleFilter(e)} />
                        <label>{category}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterProuct
