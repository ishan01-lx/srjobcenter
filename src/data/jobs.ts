export interface Job {
  id: string;
  title: string;
  country: string;
  salary: string;
  type: string;
  vacancies: number;
  deadline?: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Construction Worker',
    country: 'Qatar',
    salary: 'QAR 1,500 - 2,000/month',
    type: 'Full-time',
    vacancies: 50,
    deadline: 'March 15, 2026',
    description: 'Skilled construction workers needed for major infrastructure projects. Experience in building construction preferred.',
  },
  {
    id: '2',
    title: 'Hotel Housekeeping Staff',
    country: 'Dubai, UAE',
    salary: 'AED 1,800 - 2,200/month',
    type: 'Full-time',
    vacancies: 25,
    deadline: 'February 28, 2026',
    description: 'Housekeeping positions in 5-star hotels. Training provided. Food and accommodation included.',
  },
  {
    id: '3',
    title: 'Factory Worker',
    country: 'Malaysia',
    salary: 'MYR 1,500 - 1,800/month',
    type: 'Full-time',
    vacancies: 100,
    deadline: 'March 30, 2026',
    description: 'Manufacturing factory positions. Must be physically fit and willing to work in shifts.',
  },
  {
    id: '4',
    title: 'Security Guard',
    country: 'Saudi Arabia',
    salary: 'SAR 2,000 - 2,500/month',
    type: 'Full-time',
    vacancies: 30,
    deadline: 'February 20, 2026',
    description: 'Security positions in commercial buildings and residential compounds. Training provided.',
  },
  {
    id: '5',
    title: 'Restaurant Staff',
    country: 'South Korea',
    salary: 'KRW 2,200,000 - 2,500,000/month',
    type: 'Full-time',
    vacancies: 15,
    deadline: 'April 10, 2026',
    description: 'Various restaurant positions including kitchen helpers and service staff. Korean language course provided.',
  },
  {
    id: '6',
    title: 'Farm Worker',
    country: 'Israel',
    salary: 'ILS 5,500 - 6,500/month',
    type: 'Contract',
    vacancies: 40,
    deadline: 'March 5, 2026',
    description: 'Agricultural work in modern farms. Seasonal contract with possible extension.',
  },
];
