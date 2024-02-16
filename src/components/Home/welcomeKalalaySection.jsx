import Image from 'next/image';
import React from 'react'

const WelcomeKalalaySection = () => {
  return (
    <div className='w-full bg-[#023020] my-16'>
        <h1 className='text-orange-600 font-bold text-lg sm:text-xl text-center lg:text-5xl lg:max-w-5xl lg:mx-auto p-5 lg:p-0'>Welcome to Kalalay - Place of Authentic Art</h1>
        <div className='w-full max-w-5xl mx-auto'>
            <div className='w-full flex flex-wrap lg:flex-nowrap mt-10 lg:flex-row items-center lg:items-start gap-16 justify-center lg:justify-between lg:gap-3 p-5'>
                <div className='lg:p-5 hover:bg-white hover:rounded-2xl transition-all duration-[0.5s] ease w-1/4 text-center group'>
                    <Image src="/assets/images/hands.png" alt="become promotor" width={130} height={130} className='!w-32 !h-32 group-hover:scale-75  transition-all duration-[0.5s]'/>
                    <p className='flex flex-col text-orange-600 text-2xl justify-center items-center gap-3 mt-5 font-light'>Become a <strong className='text-orange-600 font-bold'>Promotor</strong></p>
                </div>
                <div className='lg:p-5 hover:bg-white hover:rounded-2xl transition-all duration-[0.5s] ease w-1/4 text-center group'>
                    <Image src="/assets/images/heart.png" alt="become promotor" width={130} height={130} className='!w-32 !h-32 group-hover:scale-75  transition-all duration-[0.5s]'/>
                    <p className=' text-orange-600 text-2xl justify-center items-center gap-3 mt-5 font-bold'>Caring <span className='text-orange-600 font-light'>Art</span></p>
                </div>
                <div className='lg:p-5 hover:bg-white hover:rounded-2xl transition-all duration-[0.5s] ease w-1/4 text-center group'>
                    <Image src="/assets/images/receive.png" alt="become promotor" width={130} height={130} className='!w-32 !h-32 group-hover:scale-75  transition-all duration-[0.5s]'/>
                    <p className='text-orange-600 text-[22px] justify-center items-center gap-3 mt-5 font-light'>Make <strong className='text-orange-600 font-bold'>Them Happy</strong></p>
                </div>
                <div className='lg:p-5 hover:bg-white hover:rounded-2xl transition-all duration-[0.5s] ease w-1/4 text-center group'>
                    <Image src="/assets/images/scholarship.png" alt="become promotor" width={130} height={130} className='!w-32 !h-32 group-hover:scale-75  transition-all duration-[0.5s]'/>
                    <p className=' text-orange-600 text-2xl justify-center items-center gap-3 mt-5 font-bold'>Earning <span className='text-orange-600 font-light'>Program</span></p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default WelcomeKalalaySection