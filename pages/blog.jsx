import Layout from '../components/Layout'
import EntriesList from './EntriesList';

function Blog({entries}) {

    return (

        <Layout title={"Blog"}>
            <main>
                <EntriesList entries={entries}/>
            </main>
        </Layout>

    )
}

export const getStaticProps = async () => {

    try {

        const urlEntries = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
        const request = await fetch(urlEntries);
        const response = await request.json();        

        return {
            props:{
                entries:response
            }
        }

    } catch (error) {

        return {
            props:{
                entries:[]
            }
        }

    }


}

export default Blog

