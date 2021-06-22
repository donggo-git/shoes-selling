import React from 'react'
import './FilterProduct.css'

function FilterForm(props) {
    let categories = ['Soccer', 'Training', 'Basketball', 'Running', 'Football']
    const handleFilter = (e) => {

    }
    return (
        <div className='filter'>
            <div className='filter__line'>
                <p>Gender</p>
                <div>
                    <input type='checkbox' value='Men' name='gender' onChange={(e) => props.filterHandle(e)} />
                    <label>Men</label>
                </div>
                <div>
                    <input type='checkbox' value='Women' name='gender' onChange={(e) => props.filterHandle(e)} />
                    <label>Women</label>
                </div>
                <div>
                    <input type='checkbox' value='Unisex' name='gender' onChange={(e) => props.filterHandle(e)} />
                    <label>Unisex</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Brand</p>
                <div>
                    <input type='checkbox' value='Nike' name='brand' onChange={(e) => props.filterHandle(e)} />
                    <label>Nike</label>
                </div>
                <div>
                    <input type='checkbox' value='Puma' name='brand' onChange={(e) => props.filterHandle(e)} />
                    <label>Puma</label>
                </div>
                <div>
                    <input type='checkbox' value='Adidas' name='brand' onChange={(e) => props.filterHandle(e)} />
                    <label>Adidas</label>
                </div>
                <div>
                    <input type='checkbox' value='Rebook' name='brand' onChange={(e) => props.filterHandle(e)} />
                    <label>Rebook</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Shop by Price</p>
                <div>
                    <input type='checkbox' value={[0, 25]} name='price' onChange={(e) => props.filterHandle(e)} />
                    <label for='0-25'>$0-$25</label>
                </div>
                <div>
                    <input type='checkbox' value={[25, 50]} name='price' onChange={(e) => props.filterHandle(e)} />
                    <label for='25-50'>$25-$50</label>
                </div>
                <div>
                    <input type='checkbox' value={[50, 100]} name='price' onChange={(e) => props.filterHandle(e)} />
                    <label for='50-100'>$50-$100</label>
                </div>
                <div>
                    <input type='checkbox' value={[100, 150]} name='price' onChange={(e) => props.filterHandle(e)} />
                    <label for='100-150'>$100-$150</label>
                </div>
                <div>
                    <input type='checkbox' value={[150, 10000]} name='price' onChange={(e) => props.filterHandle(e)} />
                    <label for='150-10000'>Over $150</label>
                </div>
            </div>
            <div className='filter__line category'>
                {categories.map((category) => (
                    <div className='category__label' key={category}>
                        <input
                            type='radio' value={category} name='categories'
                            onChange={(e) => props.filterHandle(e)} />
                        <label>{category}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterForm
