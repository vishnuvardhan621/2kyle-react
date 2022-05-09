import '../CSS/ItemChange.css'

import React, { useState } from "react";

import Ingredients from './Ingredients'

const DEF_ING = [
    {
        id: Math.random().toString(),
        name: '',
        amount: ''
    }
]

const ItemChange = (props) => {
    const [ingCount, setIngCount] = useState(DEF_ING);
    const closeButtonHandler = () => {
        props.fromCloseButton();
    }
    const AddIngHandler = () => {
        let newIng = {
            id: Math.random().toString(),
            name: '',
            amount: ''
        }
        setIngCount((prevIngCount) => {
            return [...prevIngCount, newIng]
        })
    }

    const deleteIngHandler = (ingCountSingle) => {
        const newIngCount = ingCount.filter(element => element.id !== ingCountSingle.id);
        setIngCount(newIngCount);
    }

    return (
        <div className='ItemChange'>
            <div className="nameClose">
                <div>
                    <label for='itemName'>Name</label>
                    {/* <span>Name</span> */}
                    <input type='text' id='itemName'></input>
                </div>
                <div>
                    <button type="button" onClick={closeButtonHandler} className='closeInChange'>X</button>
                </div>
            </div>
            <br />
            <label for='cookTime'>Cook Time</label>
            <input type='text' id='cookTime'></input>
            <br />
            <label for='servings'>Servings</label>
            <input type='text' id='servings'></input>
            <br />

            <table>
                <tr>
                    <td> <label for='instruct'>Instructions</label></td>
                    <td>
                        <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>
                    </td>
                </tr>
            </table>
            <h3>Ingredients</h3>
            <ul>
                {ingCount.map((ingCountSingle) => (
                    <Ingredients
                        key={ingCountSingle.id}
                        ingCountSingle={ingCountSingle}
                        updateIngCount={deleteIngHandler}
                    />
                ))}
            </ul>
            <div className="AddIngredientDiv">
                <button onClick={AddIngHandler} className="AddIngredient" type='button'>Add Ingredient</button>
            </div>


        </div>
    )
}

export default ItemChange;