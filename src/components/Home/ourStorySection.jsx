import Image from 'next/image';
import React from 'react'

const OurStorySection = () => {
  return (
    <div className='bg-[#f0f8ff] p-10 flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2 flex justify-center h-[550px] lg:h-full mt-5 mb-10 lg:my-0'>
            <Image src="/assets/images/group-people-volunteering-foodbank-poor-people.jpg" width={500} height={800} alt='our story' className='rounded-3xl object-contain lg:!object-cover' />
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col flex-wrap'>
                <div className='bg-white p-10 rounded-xl'>
                    <h1 className='text-orange-600 text-3xl lg:text-5xl font-bold'>Our Story</h1>
                    <p className='mt-5 font-light'>With a spirit of innovation, we aim to be trendsetters in our industry, pioneering new approaches that break the mold and redefine how artisans connect with the world. Our dedication to transparency drives us to address challenges head-on, ensuring that our policies and practices align with our mission.</p>
                    <p className='mt-5 font-light'>Every decision we make is guided by our unwavering belief in the potential of skilled artisans and the positive ripple effect they can create in their communities. We are not just a team; we are a movement that envisions a future where artisans thrive, economies flourish, and creativity knows no bounds.Together, we are shaping a brighter tomorrow for artisans and the global market. We are kalalay.</p>
                </div>
                <div className='flex gap-5 mt-5 flex-wrap lg:flex-nowrap'>
                    <div className='bg-white p-10 rounded-xl'>
                    <h1 className='text-orange-600 text-2xl lg:text-2xl font-bold'>Transparency</h1>
                    <p className='mt-5 font-light'>We value openness and honesty. Our commitment to transparency means that we address challenges head-on and ensure our policies and practices are clear, fostering trust among artisans and stakeholders.</p>
                    </div>
                    <div className='bg-white p-10 rounded-xl'>
                    <h1 className='text-orange-600 text-2xl lg:text-2xl font-bold'>Positive Impact</h1>
                    <p className='mt-5 font-light'>'Kalalay' isn't just about transactions; it's about transformation. By supporting artisans, we're creating a positive ripple effect that enriches not only individual lives but entire communities..</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStorySection