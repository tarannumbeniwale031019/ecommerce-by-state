import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (prop) => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart<button style={{"color":"red"}}>{prop.ct}</button></Link>
    </div>
  )
}

export default Nav