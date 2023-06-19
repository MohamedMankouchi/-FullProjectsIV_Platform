import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "../styling/timetable.css";
import background from "../images/timetableback.png";
import poster1 from "../images/poster1.png";
import { motion } from "framer-motion";

export const Timetable = () => {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <div className="timetable">
      <HamburgerMenu className={"headerLive"}/>

      <div className="timetable-cover">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="timetable-info"
        >
          <motion.h3 variants={item}>Vrijdag 23 juni</motion.h3>
          <motion.p variants={item}>17:00 Opening deuren </motion.p>
          <motion.p variants={item}>17:10 Expo</motion.p>
          <motion.p variants={item}>18:45 Countdown</motion.p>
          <motion.p variants={item}>19:00 Livestream Final Show</motion.p>
          <motion.p variants={item}>20:15 Receptie / Expo</motion.p>
          <motion.p variants={item}>21:00 Afsluit</motion.p>
          <motion.h3 variants={item}>Zaterdag 24 juni</motion.h3>
          <motion.p variants={item}>10:00 Start infodag</motion.p>
          <motion.p variants={item}>10:30 Expo</motion.p>
          <motion.p variants={item}>15:00 Einde infodag</motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default Timetable();
