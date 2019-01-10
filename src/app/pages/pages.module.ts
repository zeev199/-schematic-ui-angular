import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './entities-routes';
import { DashboardComponent } from './dashboard/dashboard.component';
const mainRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    // ...routes,
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
     {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }],
  }
];
@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class PagesModule { }
