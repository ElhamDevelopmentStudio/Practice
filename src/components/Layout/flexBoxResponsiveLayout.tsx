import React from 'react'

const flexBoxResponsiveLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row">
  <div className="bg-red-500 p-16">Item 1</div>
  <div className="bg-green-500 p-16">Item 2</div>
  <div className="bg-blue-500 p-16">Item 3</div>
</div>
  )
}

export default flexBoxResponsiveLayout