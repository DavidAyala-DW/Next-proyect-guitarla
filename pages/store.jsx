import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

function Store({products}) {

    return (

        <Layout title={"store"}>

            <ProductList products={products} />

        </Layout>

    )

}

export const getStaticProps = async () => {

    let entries = [];

    try {

        const urlEntries = `${process.env.API_URL}/products?_sort=created_at:desc`;
        const request = await fetch(urlEntries);
        const response = await request.json();
        entries = [...entries,...response];

    } catch (error) {
        entries = [];
    }

    return {
        props:{
            products: entries
        }
    }



}

export default Store
