import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <Link to={'/articles'}>
        <div className='logo'>Newsboard</div>
      </Link>
      <Link to={'/history'} >
        <div className='outbound-link'>History</div>
      </Link>
    </header>
  )
}

export default Header