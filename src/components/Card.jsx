import React from 'react'
import {motion} from 'framer-motion';

function Card(data) {
  return (
    <motion.div className='bg-mWhite m-2 p-2 flex flex-col justify-betwenn items-center w-[7rem] h-[8rem] rounded-md border-[2px] border-mPurple hover:border-mBlue hover:border-[3px]'
    whileHover={{
        scale: 1.08,
        transition:{duration:0.3},
    }}
    >
        <img className='bg-mWhite max-w-[4rem] min-h-[5rem]' src={data.image} alt="" />
        <h3 className='text-mBlack font-semibold text-md mt-1'> {data.name} </h3>
    </motion.div>
  )
}

export default Card