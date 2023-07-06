import {React, useState} from 'react'
import Bugger from '../Components/Bugger'
import BuilderControls from '../Components/BuilderControls'


const BuggerBuilder = () => {
    const ingredients =["chees", 'meat', 'another', 'fish'];
    const [ingredientBoard, setIngredientBoard] = useState([])
    const Current=[];
    //make clickable functions 
    const addIngredient = (index) => {   
        const selected = ingredients[index] ; 
        //setIngredientBoard(Current.push(selected)) [
     
        setIngredientBoard([...ingredientBoard, Current.push(selected)])
        console.log(selected +' is to be added');       
    }
    const removeIngredient = (index) => {
        const selected = ingredients[index];
        console.log(selected + ' is to be removed');
    }
    console.log(ingredientBoard);
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Bugger />
          <BuilderControls ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />
    </div>
  )
}

export default BuggerBuilder