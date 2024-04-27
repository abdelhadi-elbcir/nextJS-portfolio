import React from 'react'
import { listItems } from './Navbar'
import NavLink from './NavLink'
function MenuOverlay() {
  return (
    <ul className='flex flex-col py-4 items-center'>
       {
        listItems.map((item,index)=>{
            return(<li key={index}><NavLink item={item} /></li>)
        })
       }
    </ul>
  )
}

export default MenuOverlay