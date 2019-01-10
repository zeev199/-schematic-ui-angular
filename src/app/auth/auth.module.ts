import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateService } from './can-activate.service';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    TranslateModule.forChild()
  ],
  providers: [CanActivateService]
})
export class AuthModule { }
