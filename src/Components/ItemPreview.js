import '../CSS/ItemPreview.css'

import Ingredient from './Ingredient';
import IngredientsList from './IngredientsList';
import React from "react";

const ItemPreview = (props) => {

    const { name, cookTime, servings, instructions, ingredients } = props;

    const deleteHandlerPreview = () => {
        props.deleteHandler(props.id);
    }
    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h3 className='recipe__title'>{name}</h3>
                <div>
                    <button className='btn btn--primary mr-1'>Edit</button>
                    <button onClick={deleteHandlerPreview} className='btn btn--danger mr-1'>Delete</button>
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time: </span>
                <span className='recipe__value'>{cookTime}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Servings: </span>
                <span className='recipe__value'>{servings}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Instructions</span>
                <div className='recipe__value recipe__instructions recipe__value--indented '>
                    {instructions}
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Ingredients</span>
                <div className='recipe__value recipe__value--indented  '>
                    {<IngredientsList ingredients={ingredients} />}
                    {/* {ingredients.map(ingredient => {
                        return (<Ingredient
                            key={ingredient.id}
                            {...ingredient}
                        />)
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default ItemPreview;