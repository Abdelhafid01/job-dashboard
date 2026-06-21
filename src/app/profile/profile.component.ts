import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div>
          <h2>Your Profile</h2>
          <p>Manage your personal information and resume</p>
        </div>
      </div>

      <form class="profile-form" (ngSubmit)="saveProfile()">
        <div class="form-group">
          <label for="name">
            <i class="fas fa-user"></i> Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            [(ngModel)]="name"
            name="name"
          />
        </div>

        <div class="form-group">
          <label for="email">
            <i class="fas fa-envelope"></i> Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            [(ngModel)]="email"
            name="email"
          />
        </div>

        <div class="form-group">
          <label>
            <i class="fas fa-file-pdf"></i> Resume
          </label>
          <div class="upload-area" (click)="fileInput.click()" (dragover)="$event.preventDefault()" (drop)="onDrop($event)">
            <input
              #fileInput
              type="file"
              accept=".pdf,.doc,.docx"
              (change)="onFileSelected($event)"
              hidden
            />
            <div class="upload-icon">
              <i class="fas" [ngClass]="selectedFile ? 'fa-file-check' : 'fa-cloud-upload-alt'"></i>
            </div>
            <p class="upload-text" *ngIf="!selectedFile">Click or drag a file to upload your resume</p>
            <p class="upload-text upload-selected" *ngIf="selectedFile">{{ selectedFile.name }}</p>
            <p class="upload-hint" *ngIf="!selectedFile">PDF, DOC, or DOCX — max 10MB</p>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-save">
            <i class="fas fa-check"></i> Save Profile
          </button>
          <span class="save-msg" *ngIf="saved">
            <i class="fas fa-check-circle"></i> Saved successfully!
          </span>
        </div>
      </form>
    </section>
  `,
  styles: [`
    .profile-card {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      padding: 32px;
      max-width: 600px;
    }

    .profile-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    .profile-avatar {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      flex-shrink: 0;
    }

    .profile-header h2 {
      font-size: 20px;
      font-weight: 700;
      color: #1a1a2e;
      margin: 0;
    }

    .profile-header p {
      font-size: 13px;
      color: #94a3b8;
      margin: 2px 0 0;
    }

    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .form-group label i {
      color: #94a3b8;
      font-size: 13px;
    }

    .form-group input[type="text"],
    .form-group input[type="email"] {
      width: 100%;
      padding: 12px 16px;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      font-size: 14px;
      font-family: inherit;
      color: #1a1a2e;
      background: #fafbfc;
      outline: none;
      transition: all 0.2s;
    }

    .form-group input:focus {
      border-color: #4f46e5;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .form-group input::placeholder {
      color: #94a3b8;
    }

    .upload-area {
      border: 2px dashed #e2e8f0;
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      background: #fafbfc;
    }

    .upload-area:hover {
      border-color: #4f46e5;
      background: #f5f3ff;
    }

    .upload-icon {
      font-size: 32px;
      color: #94a3b8;
      margin-bottom: 10px;
    }

    .upload-area:hover .upload-icon {
      color: #4f46e5;
    }

    .upload-text {
      font-size: 14px;
      font-weight: 500;
      color: #334155;
      margin: 0;
    }

    .upload-selected {
      color: #059669;
      font-weight: 600;
    }

    .upload-hint {
      font-size: 12px;
      color: #94a3b8;
      margin: 4px 0 0;
    }

    .form-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 8px;
    }

    .btn-save {
      padding: 12px 28px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }

    .btn-save:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
    }

    .save-msg {
      font-size: 13px;
      font-weight: 600;
      color: #059669;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `]
})
export class ProfileComponent {
  name = '';
  email = '';
  selectedFile: File | null = null;
  saved = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }

  saveProfile(): void {
    this.saved = true;
    setTimeout(() => this.saved = false, 3000);
  }
}
