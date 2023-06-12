import React from 'react'
import simple from '../../Assets/simple.jpg'
import valentine from '../../Assets/valentines.jpg'
import shield from '../../Assets/shield.jpg'


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">The Value that Holds us True and to Account</h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className='w-[70%]' />
            </div>

            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>

          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem">Things made simply beautiful are attractive to heart and that's what we love doing</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={valentine} alt="" className='w-[70%]' />
            </div>

            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>

          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem">We believe in making things better for everyone, even if its just a lil bit.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={shield} alt="" className='w-[70%]' />
            </div>

            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>

          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem">Things work for the basis of creating trust which can be nurtured thru' authenticity and transparency</p>
        </div>

      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">Ready to Switch a Career?</h1>

          <h2 className="text-textColor text-[25px] font-bold">Let's get Started</h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px]  px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">Get Started</button>
      </div>

    </div>
  )
}

export default Value