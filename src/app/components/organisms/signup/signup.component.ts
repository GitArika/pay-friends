import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastService } from 'angular-toastify';

import { AuthService } from 'src/app/services/auth/auth.service';
import { SignupValidator } from 'src/app/services/validators/signup.validator';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';
import { ServerResponses } from 'src/app/constants/server.responses';
import { Exceptions } from 'src/app/constants/exceptions';
import { inputType } from 'src/app/enums/input.type.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public userForm: FormGroup;

  @ViewChild('password') inputPassword: ElementRef;
  @ViewChild('passwordConfirmation') inputPasswordConfirmation: ElementRef;

  public passwordVisibility: boolean = false;
  public passwordConfirmationVisibility: boolean = false;
  public loading: boolean;

  @Output() onSignin: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(
    private authService: AuthService,
    private renderer: Renderer2,
    private createUserFactory: CreateUserFactory,
    private signupValidator: SignupValidator,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group(this.createUserFactory.create());
  }

  signup() {
    this.loading = true;
    const validation = this.signupValidator.isValid(this.userForm.value);

    if (!validation.valid) {
      this.invalidate(validation.key);
      this.loading = false;
      return;
    }

    this.authService.signup(this.userForm.value).subscribe(
      (success) => {
        this.toastService.info('Usuário criado com sucesso.');
        this.signin();
      },
      (error) => {
        if (error?.error == ServerResponses.emailExists) {
          this.toastService.error(Exceptions.emailExists);
        } else {
          this.toastService.error(Exceptions.error);
        }
        this.loading = false;
      },
      () => {
        this.loading = false;
      },
    );
  }

  togglePasswordVisibility() {
    if (this.passwordVisibility) {
      this.inputPassword.nativeElement.type = inputType.password;
    } else {
      this.inputPassword.nativeElement.type = inputType.text;
    }
    this.passwordVisibility = !this.passwordVisibility;
  }

  togglePasswordConfirmationVisibility() {
    if (this.passwordConfirmationVisibility) {
      this.inputPasswordConfirmation.nativeElement.type = inputType.password;
    } else {
      this.inputPasswordConfirmation.nativeElement.type = inputType.text;
    }
    this.passwordConfirmationVisibility = !this.passwordConfirmationVisibility;
  }

  validate(key: string) {
    const element = document.getElementById(key);
    this.renderer.removeClass(element, 'invalid');
  }

  invalidate(key: string) {
    const element = document.getElementById(key);
    this.renderer.addClass(element, 'invalid');
  }

  signin() {
    this.onSignin.emit(true);
  }

  backToSignin() {
    this.onSignin.emit(false);
  }
}
