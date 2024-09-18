import React from 'react'

const FeatureCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className="flex bg-white rounded-lg shadow-lg p-6">
    <div className="flex-shrink-0">
      <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20"></svg>
    </div>
    <div className="ml-4">
      <h2 className="text-xl font-bold text-gray-800">Feature 1</h2>
      <p className="mt-2 text-gray-600">This is a feature card with an icon, a title, and some description text that explains the feature.</p>
      <a href="#" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold transition">Read More</a>
    </div>
  </div>

  <div className="flex bg-white rounded-lg shadow-lg p-6">
    <div className="flex-shrink-0">
      <svg className="h-12 w-12 text-green-500" fill="currentColor" viewBox="0 0 20 20"></svg>
    </div>
    <div className="ml-4">
      <h2 className="text-xl font-bold text-gray-800">Feature 2</h2>
      <p className="mt-2 text-gray-600">Another feature card demonstrating how icons and text can be laid out using Flexbox.</p>
      <a href="#" className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold transition">Read More</a>
    </div>
  </div>

  <div className="flex bg-white rounded-lg shadow-lg p-6">
    <div className="flex-shrink-0">
      <svg className="h-12 w-12 text-red-500" fill="currentColor" viewBox="0 0 20 20"></svg>
    </div>
    <div className="ml-4">
      <h2 className="text-xl font-bold text-gray-800">Feature 3</h2>
      <p className="mt-2 text-gray-600">Flexbox makes it easy to align elements side-by-side, keeping everything clean and organized.</p>
      <a href="#" className="mt-4 inline-block text-red-500 hover:text-red-600 font-semibold transition">Read More</a>
    </div>
  </div>
</div>

  )
}

export default FeatureCardGrid