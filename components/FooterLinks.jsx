import Link from 'next/link'
import React from 'react'

function FooterLinks({url,text}) {
    return (
        <Link href={url} passHref> 
            <a className='text-white font-bold text-lg'>{text}</a>
        </Link>
    )
}

export default FooterLinks
