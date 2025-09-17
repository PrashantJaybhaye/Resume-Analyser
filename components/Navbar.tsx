import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link href={'/'}>
                <p className='text-2xl font-bold text-gradient'>Analyzer</p>
            </Link>

            <div className='flex items-center gap-4'>
                <Link href={'/upload'} className='primary-button w-fit'>
                    Upload Resume
                </Link>
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: { width: 36, height: 36 },
                        },
                    }}
                />
            </div>
        </nav>
    )
}

export default Navbar