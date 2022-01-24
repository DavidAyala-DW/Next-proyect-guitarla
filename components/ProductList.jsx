import Link from 'next/link';
import React from 'react';
import DontFound from './DontFound';
import Product from './Product';

function ProductList({products=[],homepage=false}) {

    return (

        <main className='max-w-6xl mx-auto flex flex-col my-10'>

            {
                products.length > 0 &&
                
                <h1 className="text-primary font-bold text-3xl leading-none text-center mb-12">
                    {homepage ? "Featured Products" : "All Products"}
                </h1>
            }

            <div 
                className={`flex flex-col space-y-10 px-5 md:space-y-0 ${products.length>0 && "md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10" }`} 
            >
                {
                    products.length>0 ?

                        products.map( product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        ) )

                    :
                        (
                            <DontFound 
                                image={"/img/emptyStore.svg"}
                                text={"Our Store not working in this moment, please try again later"}
                            />
                        )

                }

            </div>

            {
                (homepage && products.length>0 ) && (

                    <div className='ml-auto px-5'>

                        <Link href={`/store`} passHref>
            
                            <button 
                                type='button'
                                className='
                                    outline-none border-primary border text-white font-bold
                                    uppercase text-center px-6 py-2 max-w-max mt-10 bg-primary
                                    hover:text-footer hover:bg-white transition-colors duration-150 ease-in-out
                                '
                            >
                                Visit Store
                            </button>
            
                        </Link>
            
                    </div>
                )
            }

        </main>

    );

}

export default ProductList;
