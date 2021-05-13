import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgetIngredient/BurgerIngredient'
const burger= (props)=>{

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey=>{
     let temp=[];
    for(let i=0;i<props.ingredients[igkey];i++){
        temp.push(
    <BurgerIngredient key={igkey+i} type={igkey}/>
    );
    }

    return temp;
    });
    transformedIngredients=[].concat(...transformedIngredients);
  //  console.log(transformedIngredients);
  if(transformedIngredients.length===0){
      transformedIngredients= <p>Please start adding items</p>;
  }
return (

 <div className={classes.Burger}>
 <BurgerIngredient type='bread-top' />
 {transformedIngredients}
 <BurgerIngredient type='bread-bottom' />
 </div>

);
}

export default burger;

// let transformedIngredients = Object.keys(props.ingredients)
// .map(igkey=>{
//  let temp =[Array(props.ingredients[igkey])].map((e,i)=>{
//         return  <BurgerIngredient key={igkey+1} type={igkey}/>
 
// })
// return temp;
// });
// transformedIngredients=[].concat(...transformedIngredients);
// console.log(transformedIngredients);