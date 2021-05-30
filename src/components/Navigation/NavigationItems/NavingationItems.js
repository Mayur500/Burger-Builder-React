import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navingationItems = (props)=>{

return (

    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/order"> Orders</NavigationItem>
    </ul>

)


}

export default navingationItems;