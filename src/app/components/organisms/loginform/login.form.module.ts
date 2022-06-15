import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login.form.component';
import { LoginFormValidator } from 'src/app/services/validators/login.form.validator';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
  providers: [LoginFormValidator, CreateUserFactory],
})
export class LoginFormModule {}
