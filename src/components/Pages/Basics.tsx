import React from 'react'
import SimpleCardComponent from '../cards/SimpleCardComponent'
import FlexBoxResponsiveLayout from '../Layout/flexBoxResponsiveLayout'
import ResponsiveCardGrid from '../cards/ResponsiveCardGrid'
import FeatureCardGrid from '../cards/FeatureCardGrid'
import FullResponsiveCards from '../cards/FullResponsiveCards'

const Basics = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center text-black'>Basics</h1>

      <div className='flex flex-col  m-20'>
        <div className='text-4xl font-bold text-left text-black mb-10'>Responsive Styling</div>
        <div>
        <h1 className='text-3xl  text-left text-black mb-10'>Simple Card Component</h1>
        <SimpleCardComponent />
        </div>

        <div>
          <h1 className='text-3xl  text-left text-black my-10'>FlexBox Responsive Layout</h1>
          <FlexBoxResponsiveLayout />
        </div>

        <div>
          <h1 className='text-3xl  text-left text-black my-10'>Responsive Card Grid</h1>
          <ResponsiveCardGrid />
        </div>
        <div>
          <h1 className='text-3xl  text-left text-black my-10'>Feature Card with Icon</h1>
          <FeatureCardGrid />
        </div>

        <div>
          <h1 className='text-3xl  text-left text-black my-1'>Full Responsive Card</h1>
          <FullResponsiveCards />
        </div>
      </div>
    </div>
  )
}

export default Basics