import React from 'react';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

// Experience Card
const ExperienceCard = ({ experience }) => (
  <div
    className={
      'text-white green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-10'
    }
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-12 '>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>

        <div className='flex justify-between align-center'>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <p className='text-secondary text-[16px] font-semibold'>
            {experience.date}
          </p>
        </div>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Experience
const Experience = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Experience Card */}
      <div className='empty-20 flex flex-col'>
        {/*<VerticalTimeline>*/}
        {experiences.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
        {/*</VerticalTimeline>*/}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
