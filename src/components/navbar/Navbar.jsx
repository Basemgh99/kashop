import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
         <Link to='/products'>products</Link>
          <Link to='/cart'>cart</Link>
           <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
    </nav>
  )
}

export default Navbar