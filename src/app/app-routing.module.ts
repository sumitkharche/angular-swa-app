import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: DashboardComponent
},
{
  path: 'login',
  component: LoginComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
