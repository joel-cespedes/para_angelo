import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'login', loadComponent: () => import('./pages/login/login.component').then( m => m.LoginComponent ) },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'**', redirectTo:'/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
