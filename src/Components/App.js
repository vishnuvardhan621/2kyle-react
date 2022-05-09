import '../CSS/App.css';

import React, { useState } from "react";

import ItemChangebtw from './ItemChangebtw';
import ItemPanel from './ItemPanel';

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    cookTime: '0:45',
    servings: 5,
    instructions: "1. Put salt on Pork\n2. Put Pork in oven\n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbsp'
      }
    ]
  },
  {
    id: 3,
    name: '',
    cookTime: '',
    servings: null,
    instructions: "",
    ingredients: [
      {
        id: 1,
        name: '',
        amount: ' '
      },
      {
        id: 2,
        name: '',
        amount: ' '
      }
    ]
  }

]

function App(props) {

  const [recipes, setRecipes] = useState(sampleRecipes);
  const [change, setChange] = useState(false);

  const AddRecipeItemFun = () => {
    setChange(true);
  }

  const deleteRecipeHandler = (id) => {
    const newRecipes = recipes.filter(recipes => recipes.id !== id);
    setRecipes(newRecipes);
  }

  const closeButtonFun = () => {
    setChange(false);
  }

  return (
    <div >
      <ItemPanel deleteHandler={deleteRecipeHandler} recipes={recipes} AddRecipeItem={AddRecipeItemFun} ></ItemPanel>
      <ItemChangebtw closeButton={closeButtonFun} AddRecipeItemApp={change}></ItemChangebtw>
      {/* <ItemChangebtw AddRecipeItem={AddRecipeItem}></ItemChangebtw> */}
    </div>
  )
}

export default App;
