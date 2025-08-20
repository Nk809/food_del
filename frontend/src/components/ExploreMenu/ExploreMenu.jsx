import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = (category,setcategory) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-tex">Choose from delecoius foods and some cold or hot drinks</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-item" key={index}>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_image}</p>
              <span>{item.price}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
