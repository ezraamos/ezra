import { links } from '@/lib/data';
import { create } from 'zustand';

type ActiveSectionStore = {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};
export type SectionName = (typeof links)[number]['name'];

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: 'Home',
  setActiveSection: (section: SectionName) => set({ activeSection: section }),
  timeOfLastClick: 0, //disable react observer
  setTimeOfLastClick: (time) => set({ timeOfLastClick: time }),
}));
