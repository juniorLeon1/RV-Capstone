import React from 'react'
import Yellow from '../../images/Yellow.png'
import '../../styles/CircleSmall.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const circleVariant = {
    visible: { opacity: 1, scale: 1 },
    transition: { easeIn: [0.17, 0.67, 0.83, 0.67] },
    hidden: { opacity: 0, scale: 0 }
};

export default function CircleSmall() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

  return (
    <motion.div ref={ref}
    variants={circleVariant}
    initial="hidden"
    animate={control} className='circle'>
     <img src={Yellow}></img>
    </motion.div>
  )
}
