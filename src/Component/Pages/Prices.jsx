import React from 'react'
import image1 from "../../assets/Profile2.jpg";
import PricingPlans from '../Home/PricingPlain';
import QuateRequest from '../Home/QuateRequest'
const Prices = () => {
  return (
    <div>
        <div className="relative w-full h-72 bg-gray-900">
          <img
            src={image1}
            alt="Property background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-opacity-40"></div>

          <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
            <h1 className="text-4xl font-bold">Prices</h1>
            <p className="text-large  mb-2"> Home O Prices</p>
          </div>
          <div></div>
        </div>

        <PricingPlans/>
        <QuateRequest/>
    </div>
  )
}

export default Prices
