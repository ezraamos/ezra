'use client';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/hooks/useSectionInView';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import React from 'react';
import { useTheme } from '@/store/theme-context';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  const { theme } = useTheme();

  const lineColor = theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.2)';

  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40>'>
      <SectionHeading label='experience' />
      <VerticalTimeline lineColor={lineColor}>
        {experiencesData.map(
          ({ title, description, icon, date, location }, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background:
                    theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',

                  fontSize: '1.5rem',
                }}
              >
                <h3 className='font-semibold capitalize'>{title}</h3>

                <p className='font-normal !mt-0'>{location}</p>
                <p className='!mt-1 !font-normal text-slate-700 dark:text-slate-50/75'>
                  {description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
