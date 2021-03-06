import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger'
const checkoutSummary= (props)=>{

return(

<div className={classes.CheckoutSummary}>
 
 <h1> 
 We hope it tastes well!
 </h1>

 <div style={{width:'100%'}}>
 <Burger ingredients={props.ingredients}/>

 </div>
 <div>
<Button btnType="Danger" 
clicked={props.onCheckoutCancelled}>CANCEL </Button>
<Button btnType="Success"
clicked={props.checkoutContinued}>CONTINUE </Button>
</div>

</div>




);
}

export default checkoutSummary;