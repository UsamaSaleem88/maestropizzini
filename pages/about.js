import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'

function about() {
  return (
      <div className='bg-[rgb(235,227,227)]'>
      <Navbar/>
      <About />
      <Footer/>
    </div>
  )
}

export default about
