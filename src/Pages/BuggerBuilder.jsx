import {React, useState} from 'react'
import Bugger from '../Components/Bugger'
import BuilderControls from '../Components/BuilderControls'


const BuggerBuilder = () => {
  const ingredients = ["cheese", 'meat', 'onions', 'tomato' ,'lettuce'];
    const [ingredientBoard, setIngredientBoard] = useState([])
    
    //make clickable functions 
  const addIngredient = (index) => {   
    const newIng = ingredients[index];
      const OldIng = [...ingredientBoard];
      OldIng.push(newIng)
      setIngredientBoard(OldIng)
    }
  const removeIngredient = (item) => {
     const OldIng = [...ingredientBoard];
     //get last index of the last added item, 
    const LastAddedItemIndex = OldIng.lastIndexOf(item);
      //and then slice it off the array if what was click was ever added
        if(LastAddedItemIndex>-1){
      OldIng.splice(LastAddedItemIndex, 1)
      //setstate of your ingredient
        setIngredientBoard(OldIng)
        }
      }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Bugger ingredients={ingredientBoard}/>
          <BuilderControls ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />
    </div>
  )
}

export default BuggerBuilder