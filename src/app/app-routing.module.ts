import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { LicenseComponent } from './shared/license/license.component';
import { AllLicenseComponent } from './pages/all-license/all-license.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CreateComponent } from './pages/create/create.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'faq', 
    component: FaqComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'notifications', 
    component: NotificationsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'license', 
    component: LicenseComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'all-license', 
    component: AllLicenseComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'reports', 
    component: ReportsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'create', 
    component: CreateComponent, 
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
