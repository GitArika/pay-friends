import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileValidator } from 'src/app/services/validators/profile.validator';
import { Validator } from 'src/app/services/validators/validator';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      providers: [AuthService, CreateUserFactory, ProfileValidator, Validator]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
