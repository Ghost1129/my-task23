"use client"

import Image from 'next/image'
import {motion} from 'framer-motion'

const data = [
  {
    title: 'AI + RPA Automation',
    description: 'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience',
    image: '/assets/rp2.jpg',
    buttontext: 'AI + RPA Automation'
  },
  {
    title: 'Make Bolder Choices',
    description: 'Digital focused strategies to realize market-changing ideas',
    image: '/assets/p1.png',
    buttontext: 'Build Better Apps'
  },{
    title: 'Innovate with Speed',
    description: 'Create higher quality software, deliver on customer expectations and business goals',
    image: '/assets/p2.jpg',
    buttontext: 'DevOps'
  },{
    title: 'Embrace Cloud',
    description: 'With Cloud-First accelerate innovation and optimize performance',
    image: '/assets/p3.jpg',
    buttontext: 'Cloud Services'
  }
]

const ButtonVariants = {
  rest : {
    scale: 1,
    transition: {
      duration: 0.3,
    }
  },
  hover : {
    scale: 1.1,
    transition: {
      duration: 0.3,
    }
  }
}

const arrowVariants = {
  rest : {
    x: 0,
    transition: {
      duration: 0.3,
    }
  },
  hover : {
    x: 10,
    transition: {
      duration: 0.3,
    }
  }
}
const ContainerVariants = {
  rest : {
    opacity: 0,
    y: 40,
  },
  hover : {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }

}

export default function Home() {
  return (
    <div className='m-6'>
      <h4 className='mb-20 text-2xl font-bold'>Let&apos;s Collaborate</h4>
      {data.map((item, index) => (
        <motion.div 
        initial='rest'
        whileInView='hover'
        variants={ContainerVariants}
        key={index} className='flex justify-between'>
        <div className='flex flex-col md:justify-between md:w-[600px]'>
        <h2 className='mb-10 font-serif text-4xl font-thin leading-10 md:text-5xl md:mt-4'>{item.title}</h2>
        <div className='relative w-[428px] h-[290px] md:hidden'>
          <Image src={item.image} alt="AI + RPA" fill />
        </div>
        <p className='my-6 font-serif text-xl font-medium md:-mt-16 '>{item.description}</p>
        <motion.div

        initial='rest'
        whileHover='hover'
        animate='rest'
         className='flex items-center gap-4 mb-6 cursor-pointer w-fit'>
          <motion.button
          
           className='text-lg font-bold md:text-xl md:text-black text-sky-600 hover:text-blue-500 md:hover:text-gray-700'>{item.buttontext}</motion.button>
          <motion.div 
          variants={arrowVariants}
          className='relative w-8 h-4'><Image className='object-contain' src="/assets/arrow.svg" fill alt='arrow' /></motion.div>
        </motion.div>
        </div>
        <div className='relative hidden md:block mr-12 w-[590px] h-[360px]'>
          <Image src={item.image} alt="AI + RPA" fill />
        </div>
      </motion.div>
      ))}
    </div>
  )
}
