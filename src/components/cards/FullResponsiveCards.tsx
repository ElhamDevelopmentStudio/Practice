import React from 'react'

const FullResponsiveCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="https://via.placeholder.com/400" alt="Card image" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">Card Title 1</h2>
      <p className="text-gray-600 mt-2">This is a more advanced card with an image, title, and a brief description.</p>
      <a href="#" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Learn More
      </a>
    </div>
  </div>

  
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="https://via.placeholder.com/400" alt="Card image" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">Card Title 2</h2>
      <p className="text-gray-600 mt-2">Another example with responsive grid behavior. Resize the browser to see it in action.</p>
      <a href="#" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Learn More
      </a>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="https://via.placeholder.com/400" alt="Card image" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">Card Title 3</h2>
      <p className="text-gray-600 mt-2">Card layouts adapt to screen sizes, making them perfect for responsive design.</p>
      <a href="#" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Learn More
      </a>
    </div>
  </div>
</div>

  )
}

export default FullResponsiveCards