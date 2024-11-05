'use client';
import React from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import useSectionInView from '@/hooks/useSectionInView';
import { projectsData } from '@/lib/data';

const Projects = () => {
  const { ref } = useSectionInView('Projects');
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading label={'personal projects'} />
      <div className='flex flex-col'>
        {projectsData.map((projectData, index) => (
          <React.Fragment key={index}>
            <Project {...projectData} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
