'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className='flex md:flex-row flex-col gap-4'>
    <img src={imgUrl} alt='plant-01' className='md:w-72 w-full h-64 rounded-[32px] object-cover' />
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-16 flex flex-col max-w-[650px]'>
        <h4 className='text-white font-normal lg:text-5xl text-2xl'>{title}</h4>
        <p className='text-secondary-white mt-4 lg:text-xl text-sm'>{subtitle}</p>
      </div>

      <div className='lg:flex hidden items-center justify-center w-24 h-24 rounded-full bg-transparent border-white border-[1px]'>
        <img src='arrow.svg' alt='arrow' className='w-2/5 h-2/5 object-contain'/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
