import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png'  // ✅ import image

const Header = () => {
  return (
    <div 
      className='header'
      style={{ backgroundImage: `url(${headerImg})` }} // ✅ inline background
    >
      <div className="header-contents">
        <h2>Order your favorite food here..</h2>
        <p>choose from a diverse menu featuring</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
