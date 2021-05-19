import React from 'react';
import classes from './Spinner.module.css'
const spinner = ()=>{
console.log('hello');
return(
<div className={classes.loader}>Loading...</div>
)

}

export default spinner;