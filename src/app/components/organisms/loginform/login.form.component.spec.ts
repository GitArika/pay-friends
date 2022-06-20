import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginFormValidator } from 'src/app/services/validators/login.form.validator';
import { Validator } from 'src/app/services/validators/validator';

import { LoginFormComponent } from './login.form.component';

describe('LoginFormComponentComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [LoginFormValidator, CreateUserFactory, Validator, AuthService]  
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
