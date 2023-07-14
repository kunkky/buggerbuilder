import {React, useState} from 'react'
import Bugger from '../Components/Bugger'
import BuilderControls from '../Components/BuilderControls'


const BuggerBuilder = () => {
  const ingredients = ["cheese", 'meat', 'onions', 'tomato' ,'lettuce'];
  const ingredentPrices={
    cheese: 700,
    meat: 400,
    onions: 300,
    tomato: 200,
    lettuce: 300,
    default: 1000
  }
  const [price, setPrice] = useState(ingredentPrices.default);
    const [ingredientBoard, setIngredientBoard] = useState([])
    
    //make clickable functions 
  const addIngredient = (index) => {   
    const newIng = ingredients[index];
      const OldIng = [...ingredientBoard];
      OldIng.push(newIng)
      setIngredientBoard(OldIng)
    const selectedPrice = ingredentPrices[newIng];
    
    //add price
    const totalprice = price + selectedPrice;
    setPrice(totalprice);

   
    }
  const removeIngredient = (item, ingredient) => {


     const OldIng = [...ingredientBoard];
     //get last index of the last added item, 
    const LastAddedItemIndex = OldIng.lastIndexOf(item);
      //and then slice it off the array if what was click was ever added
        if(LastAddedItemIndex>-1){
      OldIng.splice(LastAddedItemIndex, 1)
      //setstate of your ingredient
        setIngredientBoard(OldIng)
         //subtract price

          if (ingredientBoard.length > 0) {
            const selectedPrice = ingredentPrices[ingredient];
            //add price
            const totalprice = price - selectedPrice;
            setPrice(totalprice);


          }
        }
  

      }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='font-bold text-3xl text-red-400'>Total Price: {price}</div>
      <Bugger ingredients={ingredientBoard}/>
      <BuilderControls ingredentPrices={ingredentPrices} ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />
    </div>
  )
}

export default BuggerBuilder