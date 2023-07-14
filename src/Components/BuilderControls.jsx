import React from 'react'

const BuilderControls = ({ingredentPrices, ingredients, addIngredient, removeIngredient}) => {
  return (
    <div className='w-full sm:w-[400px] flex flex-col gap-2 p-2 h-[30%]'>
      {ingredients.map((item, index)=>(
        <div className=' bg-blue-900 h-[20%] flex justify-between' key={index}>
          <button onClick={() => removeIngredient(item, item)} className='flex-1 text-center text-white font-bold hover:bg-white h-full hover:text-blue-700 hover:border-solid hover:border-[1px] hover:border-blue-800'>-</button>
          <div className='flex-grow text-yellow-200 font-extrabold capitalize justify-center items-center flex'>{item}  #{ingredentPrices[item]}</div>
          <button onClick={() => addIngredient(index)} className='flex-1 text-center text-white font-bold hover:bg-white h-full hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-800'>+</button>
        </div>
        
      ))}
    </div>
  ) //npm install prop types 
}

export default BuilderControls