import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginFormValidator } from '../../services/validators/login.form.validator';
import { LoginFormModule } from 'src/app/components/organisms/loginform/login.form.module';

import { SignupModule } from 'src/app/components/organisms/signup/singup.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginFormModule,
    SignupModule,
    RouterModule.forChild(routes),
  ],
  providers: [LoginFormValidator],
  exports: [RouterModule],
})
export class LoginModule {}
