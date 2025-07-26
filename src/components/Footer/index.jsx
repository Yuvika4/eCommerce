import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <div className='bg-orange-400 text-white text-center'>
            ©{year} YuPick, All rights reserved
    </div>
  )
}

export default Footer