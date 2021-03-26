import React from 'react'
import './FilterProduct.css'

function FilterProuct() {
    let categories = ['Soccer', 'Training', 'Basketball', 'Running', 'Football']
    return (
        <div className='filter'>
            <div className='filter__line'>
                <p>Gender</p>
                <div>
                    <input type='checkbox' value='Men' name='Men' />
                    <label for='Men'>Men</label>
                </div>
                <div>
                    <input type='checkbox' value='Women' name='Women' />
                    <label for='Women'>Women</label>
                </div>
                <div>
                    <input type='checkbox' value='Unisex' name='Unisex' />
                    <label for='Unisex'>Unisex</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Shop by Price</p>
                <div>
                    <input type='checkbox' value={[0, 25]} name='0-25' />
                    <label for='0-25'>$0-$25</label>
                </div>
                <div>
                    <input type='checkbox' value={[25, 50]} name='25-50' />
                    <label for='25-50'>$25-$50</label>
                </div>
                <div>
                    <input type='checkbox' value={[25, 100]} name='50-100' />
                    <label for='50-100'>$50-$100</label>
                </div>
                <div>
                    <input type='checkbox' value={[100, 150]} name='100-150' />
                    <label for='100-150'>$100-$150</label>
                </div>
                <div>
                    <input type='checkbox' value={[150, 10000]} name='150-1000' />
                    <label for='150-10000'>Over $150</label>
                </div>
            </div>
            <div className='filter__line category'>
                {categories.map((category) => (
                    <div className='category__label'>{category}</div>
                ))}
            </div>
        </div>
    )
}

export default FilterProuct
