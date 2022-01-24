import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Entrie({entrie}) {

    const {title,url,published_at,summary,id,image:{url:urlImage,alternativeText}} = entrie;

    function formatDate(string) {

        const options = {
            year : "numeric",
            month : "long",
            day : "2-digit"
        }
        
        return new Date(string).toLocaleDateString("en-Us",options);
    
    }

    return (

        <article className='flex flex-col'>

            <div>
                <Image 
                    priority="true"
                    layout='responsive' 
                    src={urlImage} 
                    width={800} 
                    height={600} 
                    alt={alternativeText}
                />
            </div>

            <div className='p-6 flex flex-col justify-between  w-full flex-grow'>

                <div className="flex flex-col space-y-5">

                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-primary font-bold'> {formatDate(published_at)} </p>
                    <div className='text-base'>
                        {summary}
                    </div>

                </div>

                <Link href={`/blog/${url}`} passHref >

                    <button 
                        type='button'
                        className='
                            outline-none bg-white border-primary border text-footer font-bold
                            uppercase text-center px-6 py-2  mt-10 hover:bg-primary hover:text-white
                            transition-colors duration-150 ease-in-out
                        '
                    >
                        Read More
                    </button>

                </Link>

            </div>
            

        </article>

    )
}

export default Entrie
