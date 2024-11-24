import React from 'react'

export default function Category({ finalCategory, setCatName }) {
    const cat = finalCategory.map((v, i) => (
      <li key={i} onClick={() => setCatName(v)} className="bg-gradient-to-r from-gold to-yellow-400 text-gray-800 p-4 rounded-md cursor-pointer text-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-transform mb-3">
        {v}
      </li>
    ));
    return (
      <div className="p-6 bg-gradient-to-r from-gray-100 bg-slate-100 shadow-md rounded-md">
        <h3 className="text-2xl font-semibold text-black mb-4">Categories</h3>
        <ul className="space-y-3">{cat}</ul>
      </div>
    );
  }
  