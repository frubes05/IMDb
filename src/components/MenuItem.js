import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
        <Link href={address} className='mr-4 lg:mr-6 hover:text-amber-600 h-full flex items-center'>
            <Icon className="text-2xl sm:hidden mr-4"/>
            <p className='hidden sm:inline my-2 text-sm'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem