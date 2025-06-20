import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>MedixCare is a modern healthcare solution designed to transform the way medical services are delivered. Much like how the printing industry once used placeholder text for design, MedixCare brings structure and simplicity to the healthcare experience. Since its inception, MedixCare has aimed to set a new standard in patient care—connecting users with trusted doctors, managing appointments, and providing secure, easy-to-use digital health tools. It’s not just a platform; it’s the future of accessible and reliable medical care.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8604871703</li>
            <li>sonkarankulkumar@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ medixcare - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
