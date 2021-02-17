import React from 'react';
import { logo } from './source'
import './logo-list-style.css'

class Brand extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleBrand: [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }]
        }
    }
    render() {
        const handleBrandClick = (index) => {
            let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
            newBrandStyle[index] = { border: '1px solid #333' }
            this.setState({
                styleBrand: newBrandStyle
            })

        }

        return (

            <div className='logo-list'>
                {
                    logo.map((logoItem, index) => (
                        < div className='brand-item' key={index} style={this.state.styleBrand[index]} onClick={() => handleBrandClick(index)}>
                            <img src={logoItem.img} height='50%' width='50%' />
                            {console.log(logoItem.img)}
                        </ div>
                    ))
                }
            </div>
        )
    }
}
export default Brand