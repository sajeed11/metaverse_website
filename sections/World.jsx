'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components';

import { fadeIn, staggerContainer } from '../utils/motion';
import styles from "../styles";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* <div className='gradient-02 z-0' /> */}
    <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title='| People on the World' textStyles='text-center' />

      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <TitleText title={<>Track friends around you and invite them to play together in the same world</>}/>
      </motion.div>

      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px] ">
        <img src="map.png" alt="map" className="w-full h-full object-cover" />
        
        <div className="absolute bottom-20 right-28 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full"/>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[24%] w-[200px] h-[150px] p-[6px] rounded-[20px] bg-[#5d6680]">
          <img src="planet-02.png" alt="people" className="w-full h-full rounded-[20px] object-cover" />
        </div>
        {/*<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
