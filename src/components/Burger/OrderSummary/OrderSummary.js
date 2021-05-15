import React from 'react';

const orderSummary = (props)=>{
const ingredientSummary = Object.keys(props.ingredients)
.map(igkey =>{
    return (
    <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span> : {
        props.ingredient}</li>
    )
 
})
    return (
        <>
    <h3>Your Order</h3> 
    <p>A delicious burger with the following ingredients</p>
       <ul>

   {ingredientSummary}
       </ul>
     <p>Continue to Checkout</p>  
        </>
    )
}
export default orderSummary