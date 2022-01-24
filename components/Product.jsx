import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Product({product, productPage = false}) {

    const {name,url,price,summary,image:{url:urlImage,alternativeText}} = product;
    const [amount, setAmount] = useState("");

    return (

        <article className={`flex flex-col space-y-10 px-4 md:px-0 md:grid md:grid-cols-2 md:gap-x-2 md:space-y-0 ${productPage && "md:items-center" }`}>

            <div className={`${productPage ? "max-w-product" : "max-w-xs md:max-w-full"} mx-auto w-full h-full`}>

                <Image 
                    priority="true"
                    layout='responsive' 
                    src={urlImage} 
                    width={300} 
                    height={600} 
                    alt={alternativeText}
                />

            </div>

            <div className="flex flex-col space-y-5 flex-grow">

                <p className='text-3xl font-bold uppercase'>{name}</p>
                <div className='text-base whitespace-pre-wrap'>{ `${summary.length>120 ? summary.slice(0,120)+" ..." : summary }` }</div>
                <p className='text-primary text-4xl font-bold'>${price}</p>

                {

                    productPage ? (

                        <form 
                            className="flex flex-col"
                            onSubmit={e => e.preventDefault()}
                        >

                            <div className="flex items-center w-4/5 justify-between">
                                
                                <p className='text-xl font-semibold' >Choose Amount</p>

                                <select

                                    className='border border-primary px-6 py-3 text-center font-semibold'
                                    name="" id="" value={amount}
                                    onChange={ e =>  setAmount(e.value) }
                                >

                                    <option value="" disabled> 0</option>  
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>

                                </ select>

                            </div>

                            <button 
                                className='bg-primary hover:bg-footer mt-6 px-6 py-3 text-white text-center uppercase text-xl font-bold'
                                type="submit"
                            > 
                                Add to card 
                            </button>

                        </form>

                    ) : (

                        <Link href={`/store/${url}`}>

                            <button 
                                type='button'
                                className='
                                    outline-none bg-white border-primary border text-footer font-bold
                                    uppercase text-center px-6 py-2  mt-10 hover:bg-primary hover:text-white
                                    transition-colors duration-150 ease-in-out
                                '
                            >
                                See product
                            </button>

                        </Link>
                    )
                        
                }



            </div>

        </article>

    )
}

export default Product
