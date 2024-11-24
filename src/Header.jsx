import React from 'react'

export default function Header() {
    return (
      <header className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800">PrimeStore</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border rounded-md w-60 focus:outline-none"
            />
            <div className="text-gray-600 text-lg cursor-pointer hover:text-gray-800">
              🛒 Cart
            </div>
          </div>
        </div>
      </header>
    );
  }