import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory( {setCategories} ) {
    
    //Variables
    const [inputValue, setInputValue] = useState('Nueva Categoria');

    //Funciones
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( (categories) => [inputValue, ...categories]  );
            setInputValue('');
        }
            
    }

        
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                />
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
