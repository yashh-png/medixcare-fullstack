import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#f3fdf8] to-[#e8f5ef] text-gray-800 min-h-screen">

      {/* Header Section */}
      <div className="pb-6">
        <Header />
      </div>

      {/* Speciality Menu */}
      <div className="px-6 md:px-16 py-6 bg-white/90 shadow-md rounded-2xl mx-4 mb-10">
        <SpecialityMenu />
      </div>

      {/* Top Doctors Section */}
      <div className="px-6 md:px-16 py-10 bg-gradient-to-r from-[#d9fbe9] to-[#f1fcf5] rounded-2xl shadow-lg mx-4 mb-10">
        <TopDoctors />
      </div>

      {/* Banner / Call to Action */}
      <div className="px-6 md:px-16 py-10 bg-emerald-100 text-center text-emerald-900 font-medium shadow-inner rounded-2xl mx-4">
        <Banner />
      </div>

    </div>
  )
}

export default Home
