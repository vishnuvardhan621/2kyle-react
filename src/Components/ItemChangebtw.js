import '../CSS/ItemChangebtw.css';

import React, { useEffect, useState } from "react";

import ItemChange from './ItemChange'

const ItemChangebtw = (props) => {
    const [item, setItem] = useState(false);
    useEffect(() => {
        if (props.AddRecipeItemApp === true) {
            //   window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth"
            //   });
            setItem(true);
        }
        else {
            setItem(false);
        }
        // if (props.close === false) {
        //     setItem(false);
        // }
    }, [props.AddRecipeItemApp]);
    // let [windowChange, setWindowChange] = useState(false);
    // console.log("ItemChangebtw");
    // console.log(props);

    const closeButtonHandFun = () => {
        setItem(false);
        props.closeButton();
    }

    //   windowChange = props.AddRecipeItemApp;
    // setWindowChange(true);
    //  console.log(windowChange);
    // if( windowChange === true){
    //     console.log("inside if");
    //     setItem(props.AddRecipeItemApp);
    //     setWindowChange(false);
    // }

    // const AddRecipeHandler = props.AddRecipeItem;
    // AddRecipeHandler = () =>{
    //     setItem(true);
    // }

    return (
        <div className='ItemChangebtw'>
            {item && <ItemChange fromCloseButton={closeButtonHandFun}></ItemChange>}
        </div>
    )
}

export default ItemChangebtw;