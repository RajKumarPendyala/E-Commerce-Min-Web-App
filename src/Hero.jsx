import React from 'react'

export default function Hero() {
    return (
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to PrimeStore
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the best products at unbeatable prices!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>
    );
  }
  