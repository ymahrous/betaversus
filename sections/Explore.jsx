'use client';
import styles from '../styles';
import { useState } from 'react';
import { motion } from "framer-motion";
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText ,TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return(
    <section id='explore' className={`${styles.paddings}`}>
      <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title='| Worlds' textStyles='text-center' />
        <TitleText title={<>Choose a world</>} textStyles='text-center' />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>{exploreWorlds.map((world, index) => (<ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />))}</div>
      </motion.div>
    </section>
  )
};

export default Explore;