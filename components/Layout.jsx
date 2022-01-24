import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
function Layout({children,title,guitar = null }) {
    
    return (

        <div>

            <Head>

                <title>{ `GuitarLa - ${title} `}</title>
                <meta name='description' content='generate by create next app' />
                <link rel='icon' href='/favicon.ico' />
                
            </Head>                

            <div className="min-h-screen">

                <Header guitar={guitar} />

                {children}

                <Footer />    
                
            </div>

        </div>
    )
}

export default Layout
