import Link from 'next/link';
import React from 'react';
import DontFound from '../components/DontFound';
import Entrie from '../components/Entrie';

function EntriesList({entries,homepage=false}) {

    return (
        
        <div className='max-w-6xl mx-auto flex flex-col my-10'>

            {
                entries.length>0 && (

                    <h1 
                        className="text-primary font-bold text-3xl leading-none text-center mb-12"  
                    >
                        {homepage ? "Recently Entries" : "Blog"}
                    </h1>
                )
            }

            <div 
                className={`flex flex-col space-y-10 px-5 md:space-y-0 ${entries.length>0 && "md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10" }`} 
            >

                {   
                    entries.length>0 ? 

                        entries.map(entrie => (

                            <Entrie
                                key={entrie.id}
                                entrie={entrie}
                            />

                        ))

                    :
                        (
                            <DontFound 
                                image={"/img/empty.svg"}
                                text={"Blog posts are currently unavailable."}
                            />
                        )
                }

            </div>

            {
                (homepage && entries.length>0 ) && (

                    <div className='ml-auto px-5'>

                        <Link href={`/blog`}>
            
                            <button 
                                type='button'
                                className='
                                    outline-none border-primary border text-white font-bold
                                    uppercase text-center px-6 py-2 max-w-max mt-10 bg-primary
                                    hover:text-footer hover:bg-white transition-colors duration-150 ease-in-out
                                '
                            >
                                Visit Blog
                            </button>
            
                        </Link>
        
                    </div>
                )
            }

        </div>
    );
}

export default EntriesList;