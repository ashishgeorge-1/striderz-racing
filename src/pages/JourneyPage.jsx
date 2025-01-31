
import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import timelineData from "../components/journey.json";
import { Typography } from "@material-tailwind/react";
const JourneyPage = () => {
  return (
    <div className="min-h-screen bg-[#0033CC] text-white ">
      <Section>

        <motion.h1
          className="text-5xl  font-bold text-center mb-8 font-exo-2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h1>

        {/* Add team member cards or grid here */}

        <Typography className="md:px-64 lg:px-64 pb-8 text-center font-exo-2 m-5 md:text-xl ">
        Striderz Racing, a distinguished motorsports team from the Mechanical Engineering Department at Saintgits College of Engineering, boasts over a decade of rich heritage and pedigree in the motorsports domain. Our team has continually pushed the boundaries of innovation and excellence.

<br></br>Over the years, Striderz Racing has earned numerous awards and prizes in various competitions, showcasing our dedication and prowess in the field.

        </Typography>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 m-5  md:w-6/12 md:mx-auto">
          {timelineData.map((item, index) => (
            <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-exo-2 leading-none text-white ">
                {item.time}
              </time>
              <h3 className="text-lg font-semibold font-exo-2 text-white">{item.title}</h3>
              {item.image && (
                <img src={item.image} alt={item.title} className="mb-4 h-32"  />
              )}
              <p className="text-base font-exo-2 text-white whitespace-pre-line">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
};

export default JourneyPage;

