import React, { useState, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { AiOutlineClose } from 'react-icons/ai'
import "./FilterForm.css"
function FilterForm(props) {
    const filterForm = {
        Gender: ['Men', 'Women', 'Unisex'],
        Brand: ['Nike', 'Puma', 'Adidas', 'Rebook'],
        Price: ['0-25', '25-50', '50-100', '100-150', '150-10000'],
        Categories: ['Soccer', 'Training', 'Basketball', 'Running', 'Football']
    }
    const [categories, setCategories] = useState({
        Soccer: false,
        Training: false,
        Basketball: false,
        Running: false,
        Football: false
    })
    const [isPositionFixed, setIsPositionFixed] = useState(false)
    const CategoryStyle = {
        color: 'rgb(114, 114, 114)'
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
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) setIsPositionFixed(true)
            else setIsPositionFixed(false)
        });
        //return () => window.removeEventListener("scroll")
    }, [])
    return (
        <div className={`filter`}
            style={window.screen.width < 1000 ? props.filterStyle : {}}
        >
            <AiOutlineClose className='close-btn' onClick={() => props.closeFilter()} />
            <div className='filter__line first__filter__line'>
                <p>Gender</p>
                {
                    filterForm.Gender.map(value => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    size={window.screen.width > 1000 ? "big" : "medium"}
                                    color="primary"
                                    type='checkbox' value={value}
                                    name='gender' className="checkbox"
                                    onChange={(e) => props.filterHandle(e)}
                                />
                            }
                            label={value}
                        />
                    ))
                }
            </div>
            <div className='filter__line'>
                <p>Brand</p>
                {
                    filterForm.Brand.map(value => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    size={window.screen.width > 1000 ? "big" : "medium"}
                                    color="primary"
                                    type='checkbox' value={value}
                                    name='brand' className="checkbox"
                                    onChange={(e) => props.filterHandle(e)}
                                />
                            }
                            label={value}
                        />
                    ))
                }
            </div>
            <div className='filter__line'>
                <p>Shop by Price</p>
                {filterForm.Price.map(value => (
                    <FormControlLabel
                        control={
                            <Checkbox
                                size={window.screen.width > 1000 ? "big" : "medium"}
                                color="primary"
                                type='checkbox' value={value.split('-')}
                                name='price' className="checkbox"
                                onChange={(e) => props.filterHandle(e)}
                            />
                        }
                        label={value.split('-').map(price => '$' + price).join('-')}
                    />
                ))}
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
