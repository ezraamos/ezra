import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  SectionName,
  useActiveSectionStore,
} from '@/store/active-section.store';

const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({ threshold });
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );
  const timeOfLastClick = useActiveSectionStore(
    (state) => state.timeOfLastClick
  );

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
};

export default useSectionInView;
