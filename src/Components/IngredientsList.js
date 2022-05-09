import Ingredient from './Ingredient';
import React from 'react';

export default function IngredientsList({ ingredients }) {

    const IngredientElement = ingredients.map(ingredient => {
        return (<Ingredient
            key={ingredient.id}
            {...ingredient}
        />)
    })
    return (
        <div className='ingredient-grid'>
            {IngredientElement}
        </div>
    )
}

