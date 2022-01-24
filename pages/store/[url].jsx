import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import Product from '../../components/Product';

function ProductInfo({product}) {

  return (

    <Layout title={product.name}>

        <main className="max-w-3xl flex flex-col space-y-10 mx-auto my-10">

            <Product product={product} productPage />

            <Link href={"/store"} passHref>

                <button
                    type='button'
                    className='
                        outline-none bg-primary border-primary border  text-white font-bold
                        uppercase text-center px-6 py-2  mt-10 hover:bg-white hover:text-footer
                        transition-colors duration-150 ease-in-out max-w-max
                    '
                >
                    Back to Store
                </button>

            </Link>

        </main>
        
    </Layout>

  )
}

export default ProductInfo;

export const getServerSideProps = async ({query:{url}}) => {

    const urlproduct = `${process.env.API_URL}/products?url=${url}`;
    const request = await fetch(urlproduct);
    const product = await request.json();

    return {
        props:{
            product: product[0]
        }
    }

}
