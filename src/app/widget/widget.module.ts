import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import {MaterialComponentsModule} from '../shared/material.module';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FlexLayoutModule} from '@angular/flex-layout';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {CustomValidator} from '../shared/confirm-equal-validator.directive';
import {Routes, RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [];
@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes),HttpClientModule
   
  ],
  
  exports: [RouterModule],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent, ProfileComponent,]
})
export class WidgetModule { }
