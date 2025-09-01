import { Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NotificationsComponent } from './pages/notifications/notifications.component'; 
import { LicenseComponent } from './shared/license/license.component';
import { AllLicenseComponent } from './pages/all-license/all-license.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'all-license', component: AllLicenseComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'create', component: CreateComponent },
  {path : 'login', component: LoginComponent},

  
  { path: '**', redirectTo: 'dashboard' }
];
