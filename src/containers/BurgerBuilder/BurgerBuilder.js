import React , {Component} from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
}
class BurgerBuilder extends Component {

    state= {
        ingedients:{
            salad:2,
            bacon:2,
            cheese:2,
            meat:1
        },
        totalPrice:5
    }

    addIngredientHandler = (type)=>{
 const oldCount = this.state.ingredients[type];
 const updatedCount = oldCount + 1;
 const updatedIngredients = {
    ...this.state.ingedients
 };
 updatedIngredients[type]=updatedCount;
 const priceAddition= INGREDIENT_PRICES[type];
 const oldPrice =this.setState.totalPrice;
 const newPrice =oldPrice+priceAddition;
 this.setState={totalPrice:newPrice,ingredients:updatedIngredients};
    }
    removeIngredientHandler= (type)=>{
        
    }


    render (){
        return (
      <React.Fragment>
             <Burger ingredients= {this.state.ingedients}/>
           <BuildControls
           ingredientsAdded={this.addIngredientHandler}/>
    

    </React.Fragment>
        );
    }

}
export default BurgerBuilder;