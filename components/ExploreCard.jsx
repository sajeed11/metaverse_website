'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={`relative ${
    active === id ? 'lg:flex-[3.5] flex-[13]': 'lg:flex-[0.5] flex-[2] ' 
    } flex items-center justify-center lg:min-w-1/4 w-full h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  onClick={() => handleClick(id)}>
    <img src={imgUrl} alt={title} className='absolute w-full h-full object-cover rounded-2xl'/>
    {active !== id ? (
      <h3 className='font-semibold sm:text-xl text-lg text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] transition-all'>
        {title}
      </h3>
    ) : (
    <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-2xl'>
      <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-2xl`}>
        <img src='/headset.svg' alt='headset' className='w-1/2 h-1/2 object-contain'/>
      </div>
          <p className='font-normal text-base text-white uppercase'>Enter the Metaverse</p>
          <h2 className='mt-6 font-semibold sm:text-3xl text-2xl text-white'>{title}</h2>
    </div>
    )}
  </motion.div>
);

export default ExploreCard;
