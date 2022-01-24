import Link from 'next/link'
import React from 'react'

function HeaderLinks({url,text}) {
    return (

        <Link href={url} passHref>

            <a 
                className="text-white font-bold uppercase text-lg
                transition duration-100 ease-in hover:bg-primary
                py-1"
            >
                {text}
            </a>

        </Link>


    )
}

export default HeaderLinks
