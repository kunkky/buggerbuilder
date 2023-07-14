import React from 'react'

const Ingredient = ({ ingredients }) => {

  return (
    <div className='flex flex-col w-full'>
      {ingredients.length >= 1 ? <div>
        {ingredients.map((ingredient, index) => (          
           <div className={`w-full h-5 rounded-2xl bg-black my-1 ${ingredient} text-center text-sm flex justify-center items-center text-yellow-50`} key={index}>{ingredient}</div>)
        )}
      </div> : <div className='text-center'>Please add Ingredients</div>}
    </div>

  )
}

export default Ingredient