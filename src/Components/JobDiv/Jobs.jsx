import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '..//../Assets/logo (1).jpg'
import logo2 from '..//../Assets/logo (2).jpg'
import logo3 from '..//../Assets/logo (3).jpg'
import logo4 from '..//../Assets/logo (4).jpg'
import logo5 from '..//../Assets/logo (5).jpg'
import logo6 from '..//../Assets/logo (6).jpg'
import logo7 from '..//../Assets/logo (7).jpg'
import logo8 from '..//../Assets/logo (8).jpg'
import logo9 from '..//../Assets/logo (9).jpg'
import logo10 from '..//../Assets/logo (10).jpg'



const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Website Developer',
    location: 'Nakuru',
    time: 'Now',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    image: logo2,
    title: 'Software Developer',
    location: 'Kisumu',
    time: 'Now',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'The Shalez Co.'
  },
  {
    id: 3,
    image: logo3,
    title: 'UI/UX Product Designer',
    location: 'Nairobi',
    time: '12Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Jumia'
  },
  {
    id: 4,
    image: logo4,
    title: 'Graphics Designer',
    location: 'Naivasha',
    time: '20Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Chandaria'
  },
  {
    id: 5,
    image: logo5,
    title: 'Website Developer',
    location: 'Kiambu',
    time: 'Now',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Novac Linus Co.'
  },
  {
    id: 6,
    image: logo6,
    title: 'Front-End Engineer.',
    location: 'Mombasa',
    time: '8Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Tesla KE'
  },
  {
    id: 7,
    image: logo7,
    title: 'Back-End Engineer.',
    location: 'Kirinyaga',
    time: '18Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Meteorite Impact'
  },
  {
    id: 8,
    image: logo8,
    title: 'Fullstack Engineer.',
    location: 'Kericho',
    time: '8Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'CashOn'
  },
  {
    id: 9,
    image: logo9,
    title: 'Django Database Guru',
    location: 'Lamu',
    time: '12Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Zinka LTD'
  },
  {
    id: 10,
    image: logo10,
    title: 'Front-End Engineer',
    location: 'Kiambu',
    time: '10Hrs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odit sapiente doloremque quidem quasi',
    company: 'Motion 3'
  },
]

const Jobs = () => {
  return (
    <div className=''>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company Logo" className='w-[17%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover/item:text-textColor  group-hover:text-white'>Apply Now</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs