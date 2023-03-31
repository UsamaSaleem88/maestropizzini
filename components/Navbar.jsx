import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className='flex justify-between items-center px-[50px]'>
                    <div>
                        <img src="/img/logo.png" alt="" className='w-[250px] h-[40px] ' />

                    </div>
                    <div className='flex gap-[20px] font-extrabold text-[18px] text-white mt-6'>
                        <a href="#">HOME</a>
                        <a href="#">MENU</a>
                        <a href="#">SHOP</a>
                        <a href="#">NEWS</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}
