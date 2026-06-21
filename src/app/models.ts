export interface JobApplication {
  id: number;
  company: string;
  position: string;
  location: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected' | 'Pending';
  date: string;
  source: string;
  salary: string;
  matchScore: number;
}

export interface ResearchSource {
  name: string;
  icon: string;
  jobsFound: number;
  lastSync: string;
  status: 'Active' | 'Error' | 'Syncing';
}

export interface StatCard {
  label: string;
  value: string;
  icon: string;
  trend: string;
  trendUp: boolean;
  color: string;
}
