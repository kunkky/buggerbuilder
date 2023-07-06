import React from 'react'

const BuilderControls = ({ingredients, addIngredient, removeIngredient}) => {
  return (
    <div className='w-[400px] flex flex-col gap-2 p-5'>
      {ingredients.map((items, index)=>(
        <div className=' bg-blue-900 h-[50px] flex justify-between' key={index}>
          <button onClick={()=>removeIngredient(index)} className='flex-1 text-center text-white font-bold hover:bg-white h-full hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-800'>-</button>
        <div className='flex-grow text-yellow-200 font-extrabold capitalize justify-center items-center flex'>{items}</div>
          <button onClick={() => addIngredient(index)} className='flex-1 text-center text-white font-bold hover:bg-white h-full hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-800'>+</button>
        </div>
        
      ))}
    </div>
  ) //npm install prop types 
}

export default BuilderControls