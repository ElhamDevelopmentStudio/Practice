import React from 'react'

const ResponsiveCardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div className="bg-gray-200 shadow-md rounded-lg p-6">
    <h3 className="text-xl font-bold">Card 1</h3>
    <p className="text-gray-600">This is the description for card 1.</p>
  </div>
  <div className="bg-gray-200 shadow-md rounded-lg p-6">
    <h3 className="text-xl font-bold">Card 2</h3>
    <p className="text-gray-600">This is the description for card 2.</p>
  </div>
  <div className="bg-gray-200 shadow-md rounded-lg p-6">
    <h3 className="text-xl font-bold">Card 3</h3>
    <p className="text-gray-600">This is the description for card 3.</p>
  </div>
</div>
  )
}

export default ResponsiveCardGrid