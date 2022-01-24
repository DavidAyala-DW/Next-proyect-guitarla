import Link from 'next/link';
import React from 'react';

function Course({course}) {

    const {title,content,image} = course;

    return (

        <section 
            className='w-full my-10'
        >
            <div className="bg-black w-full bg-opacity-60 py-16 md:pr-80 flex justify-center md:justify-end" >

                <div className="flex flex-col space-y-10 max-w-sm">

                    <h3 className='text-primary font-bold text-3xl text-center'>{title}</h3> 
                    <p className='text-white text-center font-semibold '>{content}</p>



                    <Link href={`/about`} passHref>

                        <button 
                            type='button'
                            className='outline-none bg-transparent border-primary border text-white font-bold uppercase text-center px-6 py-2 max-w-max mx-auto mt-10 hover:bg-primary transition-colors duration-150 ease-in-out'
                        >
                            See Product
                        </button>

                    </Link>

                </div>

            </div>


            <style jsx>
                {
                 `
                    section {
                        background-image: url(${image.url});
                        background-position: center;
                        background-size: cover;
                    }

                 `   
                }
            </style>

        </section>

    );

}

export default Course;
