import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateService } from './auth/can-activate.service';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule', canActivate: [CanActivateService] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
