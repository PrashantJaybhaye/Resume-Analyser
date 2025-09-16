import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link href={'/'}>
                <p className='text-2xl font-bold text-gradient'>Analyzer</p>
            </Link>
            <Link href={'/upload'} className='primary-button w-fit'>
            Upload Resume</Link>
        </nav>
    )
}

export default Navbar