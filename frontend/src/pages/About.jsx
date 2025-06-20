import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-6 md:px-16 py-10 bg-gradient-to-br from-[#f8fbff] to-[#eef2f7] text-gray-700'>

      {/* Section Heading */}
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600'>
          ABOUT <span className='text-gray-800'>US</span>
        </h2>
        <p className='mt-2 text-sm md:text-base text-gray-500'>Your trusted partner in smart healthcare</p>
      </div>

      {/* About Content */}
      <div className='flex flex-col md:flex-row items-center gap-12 mb-16'>
        <img
          className='w-full md:max-w-[420px] rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500'
          src={assets.about_image}
          alt='About MedixCare'
        />
        <div className='flex flex-col gap-6 text-sm md:text-base md:w-2/3 text-gray-600 leading-relaxed'>
          <p>
            Welcome to <span className='font-semibold text-primary'>MedixCare</span>, your reliable partner in managing healthcare needs with ease and efficiency. We understand the challenges of booking appointments, accessing medical support, and organizing records.
          </p>
          <p>
            Our platform is built with modern technology to improve your experience. Whether it's your first consultation or you're managing long-term care, <span className='font-semibold text-primary'>MedixCare</span> is with you—every step of the way.
          </p>
          <div>
            <h3 className='font-semibold text-gray-800 text-lg mb-2'>Our Vision</h3>
            <p>
              We aim to bridge the gap between patients and professionals, delivering timely, accessible, and personalized care through seamless digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-center mb-8'>
        <h3 className='text-2xl font-bold text-gray-800'>
          WHY <span className='text-primary'>CHOOSE US</span>
        </h3>
        <p className='text-gray-500 text-sm mt-1'>Discover what makes us different</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Feature Card 1 */}
        <div className='bg-white border rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300'>
          <h4 className='text-lg font-semibold mb-3'>⚡ EFFICIENCY</h4>
          <p className='text-sm'>A quick and user-friendly appointment system that saves your time and fits your lifestyle.</p>
        </div>

        {/* Feature Card 2 */}
        <div className='bg-white border rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300'>
          <h4 className='text-lg font-semibold mb-3'>🏠 CONVENIENCE</h4>
          <p className='text-sm'>Access verified doctors and healthcare professionals from the comfort of your home.</p>
        </div>

        {/* Feature Card 3 */}
        <div className='bg-white border rounded-xl p-8 shadow-md hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300'>
          <h4 className='text-lg font-semibold mb-3'>🎯 PERSONALIZATION</h4>
          <p className='text-sm'>Receive smart reminders and recommendations tailored to your health history and goals.</p>
        </div>
      </div>
    </div>
  )
}

export default About
