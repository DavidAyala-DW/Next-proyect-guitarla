import Image from "next/image"
import Link from "next/link"
import HeaderLinks from "./HeaderLinks"

function Header({guitar}) {

    return (
        
        <header className="bg-header relative bg-no-repeat bg-cover bg-center overflow-hidden">

            <div className="bg-black bg-opacity-70 py-14 md:px-5 lg:px-0">

                <div className="md:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

                    <Link href="/" passHref>
                        
                        <a>
                            <Image width={400} height={100} src="/img/logo.svg"  alt="logo.svg" />
                        </a>
                        
                    </Link>

                    <nav className="space-x-5 flex items-center flex-wrap mt-10 md:mt-0 z-10">
                        
                        <HeaderLinks url="/" text="Home"/>
                        <HeaderLinks url="/about" text="About Us"/>
                        <HeaderLinks url="/blog" text="Blog"/>
                        <HeaderLinks url="/store" text="Store"/>

                    </nav>

                </div>

                {
                    guitar !== null && (

                        <>

                            <div className="max-w-6xl px-5 flex flex-col items-center md:items-baseline md:block  mx-auto mt-20 text-white ">

                                <h3 className="text-6xl font-semibold mb-10">{guitar.name}</h3>

                                <p className="max-w-sm mb-5 text-center md:text-left">
                                    {guitar.summary.length > 120 ? 
                                        guitar.summary.substring(0,120) + " ..." 
                                        : 
                                        guitar.summary   
                                    }
                                </p>

                                <p className="text-primary font-bold text-4xl">${guitar.price}</p>

                                <Link href={`/store/${guitar.url}`} passHref>
                                    <button 
                                        type='button'
                                        className='
                                            outline-none bg-transparent border-primary border text-white font-bold
                                            uppercase text-center px-6 py-2 max-w-max mx-auto mt-10 hover:bg-primary
                                            transition-colors duration-150 ease-in-out
                                        '
                                    >
                                        See Product
                                    </button>
                                </Link>

                            </div>

                            <div className="fixed md:absolute md:bottom-0 md:block md:max-w-sm md:w-1/2 md:right-0 md:-mr-24 animate-header">
                                <Image 
                                    priority="true"
                                    layout='responsive' 
                                    src={"/img/header_guitarra.png"} 
                                    width={300} 
                                    height={600} 
                                    alt={guitar.image.alternativeText}
                                />
                            </div>

                        </>
                        
                    )
                }

            </div>

        </header>
    )
}

export default Header
