import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { HeaderModule } from 'src/app/components/organisms/header/header.module';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';
import { ProfileValidator } from 'src/app/services/validators/profile.validator';

const routes: Routes = [
  {
    path: ':id',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [CreateUserFactory, ProfileValidator],
})
export class ProfileModule {}
