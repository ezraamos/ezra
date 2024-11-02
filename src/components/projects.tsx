import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import React from 'react';
import Project from './project';

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-28 mb-28'>
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
