import classes from '../Modal/Modal.module.css';
import React from 'react';

const modal= (props)=>{

 return (
<div
style={{
    transform:props.show?'translateY(0)':'translateY(-100vh)',
    opacity:props.show?'1':'0'
}}
 className={classes.Modal}>
{props.children}
</div>


);
}

export default modal;