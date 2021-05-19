import classes from '../Modal/Modal.module.css';
import React,{Component} from 'react';
import Backdrop from '../Backdrop/Backdrop'
class Modal extends Component {

shouldComponentUpdate(nextProps, nextState){
  if(nextProps.show !== this.props.show || nextProps.children!== this.props.children){
      return true;
  }
  return false;
}
componentDidUpdate(){
    console.log('Modal Updating');

}
    render(){
        return (
            <>
       <Backdrop show ={this.props.show}
       clicked ={this.props.modalClosed}
       />
       <div
       style={{
           transform:this.props.show?'translateY(0)':'translateY(-100vh)',
           opacity:this.props.show?'1':'0'
       }}
        className={classes.Modal}>
       {this.props.children}
       </div>
       
       </>
       ); 
    }
}

export default Modal;