import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

@Component({
  selector: 'app-job-applications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent {
  @Input() searchQuery = '';

  selectedStatus = 'All';
  statuses = ['All', 'Applied', 'Interview', 'Offer', 'Rejected', 'Pending'];

  jobs: JobApplication[] = [
    { id: 1, company: 'Google', position: 'Senior Frontend Developer', location: 'Mountain View, CA', status: 'Interview', date: '2026-06-15', source: 'LinkedIn', salary: '$180k - $220k', matchScore: 92 },
    { id: 2, company: 'Microsoft', position: 'Full Stack Engineer', location: 'Seattle, WA', status: 'Applied', date: '2026-06-14', source: 'Indeed', salary: '$160k - $200k', matchScore: 87 },
    { id: 3, company: 'Meta', position: 'React Developer', location: 'Menlo Park, CA', status: 'Interview', date: '2026-06-13', source: 'LinkedIn', salary: '$170k - $210k', matchScore: 85 },
    { id: 4, company: 'Amazon', position: 'Software Development Engineer', location: 'Austin, TX', status: 'Pending', date: '2026-06-12', source: 'Glassdoor', salary: '$155k - $195k', matchScore: 78 },
    { id: 5, company: 'Apple', position: 'iOS Developer', location: 'Cupertino, CA', status: 'Applied', date: '2026-06-11', source: 'LinkedIn', salary: '$175k - $215k', matchScore: 82 },
    { id: 6, company: 'Netflix', position: 'Senior Software Engineer', location: 'Los Gatos, CA', status: 'Offer', date: '2026-06-10', source: 'Indeed', salary: '$200k - $260k', matchScore: 94 },
    { id: 7, company: 'Stripe', position: 'Backend Developer', location: 'San Francisco, CA', status: 'Interview', date: '2026-06-09', source: 'AngelList', salary: '$165k - $205k', matchScore: 80 },
    { id: 8, company: 'Airbnb', position: 'Full Stack Developer', location: 'San Francisco, CA', status: 'Rejected', date: '2026-06-08', source: 'LinkedIn', salary: '$160k - $190k', matchScore: 72 },
    { id: 9, company: 'Spotify', position: 'Frontend Engineer', location: 'New York, NY', status: 'Applied', date: '2026-06-07', source: 'GitHub Jobs', salary: '$145k - $185k', matchScore: 76 },
    { id: 10, company: 'Uber', position: 'Software Engineer II', location: 'San Francisco, CA', status: 'Pending', date: '2026-06-06', source: 'Indeed', salary: '$150k - $190k', matchScore: 74 },
    { id: 11, company: 'Shopify', position: 'Ruby on Rails Developer', location: 'Remote', status: 'Interview', date: '2026-06-05', source: 'Remote OK', salary: '$140k - $180k', matchScore: 88 },
    { id: 12, company: 'Datadog', position: 'Platform Engineer', location: 'New York, NY', status: 'Offer', date: '2026-06-04', source: 'LinkedIn', salary: '$170k - $220k', matchScore: 91 }
  ];

  get filteredJobs(): JobApplication[] {
    let filtered = this.jobs;
    if (this.selectedStatus !== 'All') {
      filtered = filtered.filter(j => j.status === this.selectedStatus);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(j =>
        j.company.toLowerCase().includes(q) ||
        j.position.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q)
      );
    }
    return filtered;
  }

  getStatusClass(status: string): string {
    return 'status-' + status.toLowerCase();
  }

  getMatchClass(score: number): string {
    if (score >= 90) return 'match-excellent';
    if (score >= 80) return 'match-good';
    if (score >= 70) return 'match-fair';
    return 'match-low';
  }

  openAndApply(job: JobApplication): void {
    console.log('Opening application for:', job.company, '-', job.position);
    // Future: open external URL or application modal
  }
}
