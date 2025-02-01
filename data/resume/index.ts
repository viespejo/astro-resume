import { resumeEn } from './en';
import { resumeEs } from './es';
import type { ResumeData } from './types';

export type Language = 'en' | 'es';

export const getResumeData = (lang: Language): ResumeData => {
  return lang === 'en' ? resumeEn : resumeEs;
};

export default resumeEn;
