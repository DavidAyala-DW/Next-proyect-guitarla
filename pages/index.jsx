import Link from 'next/link'
import Course from '../components/Course'
import DontFound from '../components/DontFound'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import EntriesList from './EntriesList'

export default function Home({products,course,entries}) {

  return (

    <Layout title="Home" guitar={products[1]}>

      <ProductList products={products} homepage />

      {
        Object.keys(course).length>0  ? (
          <Course course={course} />
        ): (
          <DontFound 
            image={"/img/emptyCourse.svg"}
            text={"The course to ' Learn to play guitar ' is not available in this moments"}
          />
        )
      }
      
      <EntriesList entries={entries} homepage />

    </Layout>

  )
}

export const getStaticProps = async () => {

  try {

      const urlProducts = `${process.env.API_URL}/products?_limit=3&_sort=created_at:desc`;
      const urlCourse = `${process.env.API_URL}/course`;
      const urlEntries = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

      const [requestProducts,requestCourse,requestEntries] = await Promise.all([
        fetch(urlProducts),
        fetch(urlCourse),
        fetch(urlEntries)
      ]);
      
      const [products,course,entries] = await Promise.all([
        requestProducts.json(),
        requestCourse.json(),
        requestEntries.json()
      ]);
      
      return {
        props : {
          products,
          course,
          entries
        }
      }

  } catch (error) {

    return {
      props : {
        products : [],
        course : {},
        entries : []
      }
    }

  }

}