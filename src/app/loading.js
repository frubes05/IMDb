import Image from 'next/image';
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center'>
      <Image width={'300'} height={'300'} src='spinner.svg' alt='loading...' />
    </div>
  )
}

export default Loading;