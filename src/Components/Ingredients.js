import '../CSS/Ingredient.css'

import React, { useState } from "react";

const Ingredients = ({ ingCountSingle, updateIngCount, updateIng }) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAmount, setAmount] = useState('');

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     let newIng = {
    //         name: enteredName,
    //         amount: enteredAmount
    //     }
    //     newIng(newIng);
    //     // setEnteredName('');
    //     // setAmount('');
    // }

    console.log("ingredient.js")
    console.log(ingCountSingle);
    const ingCloseHandler = () => {
        updateIngCount(ingCountSingle);
    }
    return (
        <div>
            <div className="ingredientDiv">
                <div className="ingName">
                    <label for='ingName'>Name</label>
                    <br />
                    <input type='text' id='ingName'  onChange={nameHandler}></input>
                </div>
                <div className="ingAmount">
                    <label for='ingAmount'>Amount</label>
                    <br />
                    <input type='text' id='ingAmount'  onChange={amountHandler}></input>
                </div>
                <div className="ingClose">
                    <button onClick={ingCloseHandler} className="ingCloseButton" type='button'>X</button>
                </div>
            </div>
            <br />

        </div>
    )
}

export default Ingredients;