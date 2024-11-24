import React from 'react'

export default function ProductItems({ pdata }) {
  return (
    <div className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 relative">
        <div className="relative w-full h-48 overflow-hidden">
            <img src={pdata.image} alt={pdata.title} className="p-2 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75 group-hover:opacity-60 transition-opacity"></div>
        </div>
        <div className="p-4">
            <h4 className="text-lg font-bold text-gray-800 truncate">{pdata.title}</h4>
            <div className="flex items-center mt-2">
                <span className="text-gold font-semibold text-xl">
                    ${pdata.price.toFixed(2)}
                </span>
                <span className="ml-auto text-yellow-500 text-sm flex items-center">
                    ⭐ {pdata.rating?.rate || "4.5"}
                </span>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-yellow-600 transition ">
                Add to Cart
            </button>
        </div>
    </div>
  );
}
