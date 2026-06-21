import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobApplicationsComponent } from '../job-applications/job-applications.component';
import { ProfileComponent } from '../profile/profile.component';

interface StatCard {
  label: string;
  value: string;
  icon: string;
  trend: string;
  trendUp: boolean;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JobApplicationsComponent,
    ProfileComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarCollapsed = false;
  activeNav = 'dashboard';
  searchQuery = '';

  stats: StatCard[] = [
    { label: 'Total Applications', value: '156', icon: 'fa-paper-plane', trend: '+12%', trendUp: true, color: '#4f46e5' },
    { label: 'Interviews Scheduled', value: '8', icon: 'fa-calendar-check', trend: '+3', trendUp: true, color: '#059669' },
    { label: 'Offers Received', value: '2', icon: 'fa-trophy', trend: '+1', trendUp: true, color: '#d97706' },
    { label: 'Match Score Avg', value: '78%', icon: 'fa-bullseye', trend: '+5%', trendUp: true, color: '#dc2626' }
  ];

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setActiveNav(item: string): void {
    this.activeNav = item;
  }
}
