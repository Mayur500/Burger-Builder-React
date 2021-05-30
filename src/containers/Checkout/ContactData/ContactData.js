import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                touched:false
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                 touched:false
            },
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'zipCode'
                },
                value:'',
                validation:{
                    required:true
                },
                 touched:false
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                validation:{
                    required:true
                },
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                 touched:false
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
             options:[
                 {value:'fastest',displayValue:'Fastest'},
                 {value:'cheapest',displayValue:'Cheapest'},
                 
                ]
                },
                value:'Fastest',
            } 
        },
        loading:false
    }
 checkValidity(value,rules){
     let isValid =false;

     if(rules.required){
         isValid =value.trim()!=='';
     }
     return isValid;
 }   
orderHandler= (event)=>{
     event.preventDefault();
       this.setState({loading:true});
       let formData = {};
      for(let formElementIdentifier in this.state.orderForm){
        formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
      }

  // /orders is url and .json is important for requesting on firebase 

  const order={
      ingredients:this.props.ingredients,
      price:this.props.price,
      orderData:formData
  };

      axios.post('/orders.json', order)
      .then(response=>{
         this.setState({loading:false,purchasing:false});
         this.props.history.push('/')
     }).catch(err=>{
        this.setState({loading:false,error:true})  
     })

}
inputChangeHandler=(event,inputIdentifier)=>{
const updatedOrderForm ={
    ...this.state.orderForm
};

const updatedFormElement={
    ...updatedOrderForm[inputIdentifier]
}
updatedFormElement.value=event.target.value;
updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);

updatedOrderForm[inputIdentifier]=updatedFormElement;
//this.setState({orderForm:updatedOrderForm})
}
render(){
    const formElementArray=[];
    for(let key in this.state.orderForm){
        formElementArray.push({
            id:key,
            config:this.state.orderForm[key]
        })
    }
    let form=null;
    if(this.state.loading){
        form = <Spinner/>
    }
    form=(
        <form onSubmit={this.orderHandler}>
        
        {formElementArray.map((formElement)=>{return (
            <Input 
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            key={formElement.id}
            invalid={!formElement.cpnfig.value}
            changed={(event)=>{this.inputChangeHandler(event,formElement.id)}}
             /> 
        )}
        )} 
        <Button btnType="Success" >Order</Button>    
    </form>
    )
    return (
        <div className={classes.ContactData}>

        <h4>Enter your Contact Data</h4>
   
        <form>
        {form} 
        </form>

        </div>
    )
}
}

export default ContactData;