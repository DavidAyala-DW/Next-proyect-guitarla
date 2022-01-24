import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

function NotFoundPage() {
    
    return (

        <Layout title={"404 Page"}>

            <main className='max-w-3xl mx-auto flex flex-col my-10 space-y-10'>

                <div className="max-w-lg w-full mx-auto">
                    
                    <Image 
                        layout='responsive' 
                        width={600} 
                        height={400} 
                        src={"/img/404.svg"} 
                    />

                </div>

                <h1 className='text-black font-semibold text-xl text-center'>The requested page doesn't exist or you don't have access to it.</h1>

                <Link href={`/`}>

                    <button 
                        type='button'
                        className='
                        outline-none bg-primary  text-white font-bold
                        uppercase text-center px-6 py-2  mt-10 hover:bg-white hover:text-footer
                        hover:border-primary hover:border
                        transition-colors duration-150 ease-in-out
                        max-w-max mx-auto
                    '
                    >
                        Go to home
                    </button>

                </Link>

            </main>
            
        </Layout>



    )
}

export default NotFoundPage
