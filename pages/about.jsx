import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

function About() {
    return (

        <Layout title="About Us">

            <main className="max-w-6xl mx-auto flex flex-col my-10">

                <h1 
                    className="text-primary font-bold text-3xl leading-none text-center mb-12"
                >
                    About us
                </h1>
                
                <div className="px-6 flex flex-col space-y-5 md:grid md:grid-cols-2 md:gap-x-10">

                    <Image layout="responsive" width={600} height={400} src={"/img/nosotros.jpg"} />
                    
                    <div className="flex flex-col justify-center font-semibold space-y-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum aperiam nesciunt repellendus beatae voluptas repellat quae, libero accusamus delectus, deleniti esse qui perspiciatis recusandae dolorum culpa veniam impedit incidunt? Quo laborum aperiam nesciunt repellendus beatae voluptas repellat quae, libero accusamus delectus, deleniti esse qui perspiciatis recusandae dolorum culpa veniam impedit incidunt?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum aperiam nesciunt repellendus beatae voluptas repellat quae, libero accusamus delectus, deleniti esse qui perspiciatis recusandae dolorum culpa veniam impedit incidunt? Quo laborum aperiam nesciunt repellendus beatae voluptas repellat quae, libero accusamus delectus, deleniti esse qui perspiciatis recusandae dolorum culpa veniam impedit incidunt?</p>
                    </div>

                </div>

            </main>

        </Layout>
    )
}

export default About
