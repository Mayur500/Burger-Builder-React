import React , {Component} from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
}
class BurgerBuilder extends Component {

     state= {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:0,
        purchasable:false,
        purchasing:false
    }

updatedPurchaseState(updatedIngredients){
const ingredients={
    ...updatedIngredients
};
const sum = Object.values(ingredients)
.reduce((sum,el)=>{
return sum+el;
},0);
//console.log(sum);
this.setState({purchasable:sum>0});
}

addIngredientHandler = (type)=>{
     
 const oldCount = this.state.ingredients[type];
//console.log(oldCount);
 const updatedCount = oldCount + 1;
 let updatedIngredients = {
    ...this.state.ingredients
 };
 //console.log(type);
 updatedIngredients[type]=updatedCount;
 const priceAddition= INGREDIENT_PRICES[type];
 const oldPrice =this.state.totalPrice;
 const newPrice =oldPrice+priceAddition;
 this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
 this.updatedPurchaseState(updatedIngredients);
 //console.log(updatedIngredients);
    }

    removeIngredientHandler= (type)=>{
        const oldCount = this.state.ingredients[type];
        console.log(oldCount);
         const updatedCount = oldCount>0 ? oldCount - 1:0;
         let updatedIngredients = {
            ...this.state.ingredients
         };
         //console.log(type);
         updatedIngredients[type]=updatedCount;
         const priceAddition= INGREDIENT_PRICES[type];
         const oldPrice =this.state.totalPrice;
         const newPrice =Math.min(0,oldPrice-priceAddition);
         this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        
    }
 purchaseHandler= ()=>{

this.setState({purchasing:true});

 }
      
    render (){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return (
      <>
             <Modal show={this.state.purchasing}> 
             <OrderSummary ingredients={this.state.ingredients}/>
             </Modal>
             <Burger ingredients= {this.state.ingredients}/>
           <BuildControls
           ingredientsAdded={this.addIngredientHandler}
           ingredientsRemoved={this.removeIngredientHandler}
               disabled={disabledInfo}
               ordered={this.purchaseHandler}
               price={this.state.totalPrice}
               purchasable={this.state.purchasable}
           />

    

    </>
        );
    }

}
export default BurgerBuilder;