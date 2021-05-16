
import React from 'react';
import classes from './Logo.module.css';
import burgerlogo from "../../assets/images/burger-logo.png";

const logo = (props)=>{
return (

  <div className={classes.Logo} style={{height:props.height}}>
 <img src={burgerlogo} alt="Myburger"/>
  </div>

)


}

export default logo;