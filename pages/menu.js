import Menu from '@/components/Menu'
import React, { Component } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'


export class menu extends Component {
    render() {
        return (
            <div>
                <div className='bg-[rgb(34,33,33)]'>
                    <Navbar />
                    <Menu />
                    <About/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default menu
