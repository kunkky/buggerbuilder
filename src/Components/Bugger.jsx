import React from 'react'
import Top from './Bugger/Top'
import Ingredient from './Bugger/Ingredient'
import Buttom from './Bugger/Buttom'

const Bugger = ({ ingredients }) => {
  return (
  <div className='h-[70%] flex justify-center items-center flex-col overflow-auto'>
      <Top/>
       <Ingredient ingredients={ingredients}/> 
    <Buttom/>
  </div>
  )
}

export default Bugger