import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setcategories }) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => { 
        setInputValue(e.target.value)

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(InputValue.trim().length>2){
            setcategories(cats=>[InputValue,...cats])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={InputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )

}

AddCategory.prototype={
    setcategories:PropTypes.func.isRequired
}
