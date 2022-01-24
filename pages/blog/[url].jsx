import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

function EntrieContent({entrie}) {

    const {title,content,image:{url:urlImage,alternativeText},published_at} = entrie;

    function formatDate(string) {

        const options = {
            year : "numeric",
            month : "long",
            day : "2-digit"
        }
        
        return new Date(string).toLocaleDateString("en-Us",options);
    
    }

    return (

        <div>

            <Layout title={"hello"}>


                <main className='max-w-3xl mx-auto flex flex-col my-10 space-y-10'>
                    
                    <h1 className="text-primary font-bold text-3xl leading-none text-center mb-6">
                        {title}
                    </h1>

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

                     <p className='text-primary text-lg font-bold'> {formatDate(published_at)} </p>

                     <div className='text-base whitespace-pre-wrap'>
                        {content}
                    </div>

                    <Link href={"/blog"}>

                        <button
                            type='button'
                            className='
                                outline-none bg-primary border-primary border  text-white font-bold
                                uppercase text-center px-6 py-2  mt-10 hover:bg-white hover:text-footer
                                transition-colors duration-150 ease-in-out max-w-max
                            '
                        >
                            Back to Blog
                        </button>

                    </Link>

                </main>     
            </Layout>
            
        </div>

    )
}

export const getStaticPaths = async () => {

    const url = `${process.env.API_URL}/blogs`;
    const request = await fetch(url);
    const response = await request.json();

    const paths = response.map(entrie => ({
        params: {url: entrie.url}
    }) )

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async ({params:{url}}) => {

    const urlEntrie = `${process.env.API_URL}/blogs?url=${url}`;
    const request = await fetch(urlEntrie);
    const response = await request.json();

    return {
        props:{
            entrie: response[0]
        }
    }

}

export default EntrieContent
