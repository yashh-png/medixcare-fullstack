import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-6 md:px-16 py-12 bg-gradient-to-b from-[#f9fbfd] to-[#eef3f8] text-gray-700'>

      {/* Section Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600'>
          CONTACT <span className='text-gray-800'>US</span>
        </h2>
        <p className='mt-2 text-sm text-gray-500'>We’re here to help and answer any questions</p>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row items-center gap-12 mb-20'>

        {/* Contact Image */}
        <img
          className='w-full md:max-w-[360px] rounded-xl shadow-md hover:scale-105 transition-transform duration-500'
          src={assets.contact_image}
          alt='Contact'
        />

        {/* Text Content */}
        <div className='bg-white rounded-2xl shadow-lg p-8 w-full md:w-2/3 hover:shadow-xl transition duration-500'>

          <div className='flex flex-col gap-6 text-sm text-gray-600'>

            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-1'>🏢 OUR OFFICE</h3>
              <p>Lucknow, <br />India</p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-1'>📞 CONTACT</h3>
              <p>
                Tel: <a href='tel:8604871703' className='text-teal-600 hover:underline'>8604871703</a><br />
                Email: <a href='mailto:pandeyyash531@gmail.com' className='text-teal-600 hover:underline'>pandeyyash531@gmail.com</a>
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-1'>💼 CAREERS AT MEDIXCARE</h3>
              <p>Learn more about our teams and exciting job openings.</p>
              <button className='mt-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300'>
                Explore Jobs
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
