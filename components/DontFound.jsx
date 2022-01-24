import Image from 'next/image'
import React from 'react'

function DontFound({image,text}) {
    
    return (

        <div className='flex flex-col space-y-5 py-10'>

            <div className='max-w-md w-full mx-auto'>

                <Image 
                    layout='responsive' 
                    width={600} 
                    height={400} 
                    src={image} 
                    alt='DontFound.svg'
                />

            </div>

            <h2 
                className='text-black font-semibold text-2xl text-center'
            >
                {text}
            </h2>

        </div>

    )
}

export default DontFound
