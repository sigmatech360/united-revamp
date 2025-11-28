import React from 'react'
import { Link } from 'react-router-dom'

const BrandStartNow = () => {
  return (
    <div className='container startnow-sec py-5'>
        <div className='startnow-sec-content'>
            <h1>Design Your Own Unique Brand Strategy Today!</h1>
            <Link to="/contact-us" className='theme-btn theme-btn__yellow'>Start Now!</Link>
        </div>
      
    </div>
  )
}

export default BrandStartNow
