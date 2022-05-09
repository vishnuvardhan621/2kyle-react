import '../CSS/ItemPanel.css'

import Ingredients from './IngredientsList'
import ItemPreview from './ItemPreview'
import React from "react";

const ItemPanel = (props) => {
    // console.log('itempanel');
    // console.log(props);
    const { AddRecipeItem, recipes } = props;

    const AddRecipe = () => {
        AddRecipeItem();
    }
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => {
                    return <ItemPreview
                        key={recipe.id}
                        {...recipe}
                        deleteHandler={props.deleteHandler}
                    />
                })}
            </div>

            <div className='recipe-list__add-recipe-btn-container'>
                <button onClick={AddRecipe} className='btn btn--primary' type='button'>Add Recipe</button>
            </div>
        </div>
    )
}

export default ItemPanel;