import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import "./FilterForm.css"
function FilterForm(props) {
    const [categories, setCategories] = useState({
        Soccer: false,
        Training: false,
        Basketball: false,
        Running: false,
        Football: false
    })
    const CategoryStyle = {
        color: 'rgb(114, 114, 114)'
    }
    const responsiveStyle = {
        position: 'absolute',
        top: 0,
        left: '0%',
        transition: 'all 0.8s'
    }
    const handleCategories = (e) => {
        let newCategories = { ...categories }
        let passCategory = {
            target: {
                name: "categories",
                value: ""
            }
        }
        if (newCategories[e.target.className.split(" ")[1]] == true) {
            for (let i in newCategories) {
                newCategories[i] = false
            }

        }
        else {
            for (let i in newCategories) {
                newCategories[i] = false
            }
            newCategories[e.target.className.split(" ")[1]] = true;
            passCategory.target.value = e.target.className.split(" ")[1]
        }
        console.log(passCategory)
        props.filterHandle(passCategory)
        setCategories(newCategories)

    }
    return (
        <div className='filter' style={responsiveStyle}>
            <div className='filter__line'>
                <p>Gender</p>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Men'
                        name='gender' className="checkbox"
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Men</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Women'
                        name='gender' className="checkbox"
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Women</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Unisex'
                        name='gender'
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Unisex</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Brand</p>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Nike'
                        name='brand'
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Nike</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Puma'
                        name='brand'
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Puma</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Adidas'
                        name='brand'
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Adidas</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value='Rebook'
                        name='brand'
                        onChange={(e) => props.filterHandle(e)} />
                    <label>Rebook</label>
                </div>
            </div>
            <div className='filter__line'>
                <p>Shop by Price</p>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value={[0, 25]}
                        name='price'
                        onChange={(e) => props.filterHandle(e)} />
                    <label for='0-25'>$0-$25</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value={[25, 50]}
                        name='price'
                        onChange={(e) => props.filterHandle(e)} />
                    <label for='25-50'>$25-$50</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value={[50, 100]}
                        name='price'
                        onChange={(e) => props.filterHandle(e)} />
                    <label for='50-100'>$50-$100</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox' value={[100, 150]}
                        name='price'
                        onChange={(e) => props.filterHandle(e)} />
                    <label for='100-150'>$100-$150</label>
                </div>
                <div>
                    <Checkbox
                        size="small"
                        type='checkbox'
                        value={[150, 10000]}
                        name='price'
                        onChange={(e) => props.filterHandle(e)} />
                    <label for='150-10000'>Over $150</label>
                </div>
            </div>
            <div className='filter__line category'>
                {Object.keys(categories).map((category) => (
                    <div
                        className={`categories ${category}`} key={category}
                        type='radio' name='categories'
                        onClick={(e) => handleCategories(e)}
                        style={categories[category] ? CategoryStyle : {}}>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterForm
