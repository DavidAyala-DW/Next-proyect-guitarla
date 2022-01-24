import React from 'react';
import FooterLinks from './FooterLinks';

function Footer() {
    return (

        <div
            className='bg-footer py-14 max-w-screen'
        >   
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between ">

                <nav className="space-x-5 mb-10 md:mb-0">
                    <FooterLinks url="/" text="Home"/>
                    <FooterLinks url="/about" text="About Us" />
                    <FooterLinks url="/blog" text="Blog" />
                    <FooterLinks url="/store" text="Store" />
                </nav>

                <p className='text-white font-bold text-lg'>
                    All rights reserved
                </p>

            </div>            

        </div>
    )
}

export default Footer
