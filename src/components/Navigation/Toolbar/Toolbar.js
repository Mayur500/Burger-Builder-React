import classes from './Toolbar.module.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavingationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props)=>{
return (

    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
       <Logo/>
       </div>
        <nav  className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
        
    </header> 

)


}

export default toolbar;