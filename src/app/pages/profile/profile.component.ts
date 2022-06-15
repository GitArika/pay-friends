import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileValidator } from 'src/app/services/validators/profile.validator';
import { CreateUserFactory } from 'src/app/factorys/create.user.factory';
import { IUser } from 'src/app/interfaces/IUser';
import { Exceptions } from 'src/app/constants/exceptions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private routeSub: Subscription;
  public user: IUser;
  public form: FormGroup = this.formBuilder.group(
    this.createUserFactory.create(),
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private createUserFactory: CreateUserFactory,
    private formBuilder: FormBuilder,
    private profileValidator: ProfileValidator,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.getUser(params['id']);
    });
  }

  getUser(id: number) {
    this.authService.getUser(id).subscribe(
      (res) => {
        this.user = { ...res.body };
        this.form = this.formBuilder.group(
          this.createUserFactory.profile(this.user),
        );
      },
      (error) => {
        this.toastService.error(Exceptions.userNotAuthorized);
        this.router.navigate([environment.Routes.login]);
      },
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  dashboard() {
    this.router.navigate([environment.Routes.dashboard]);
  }

  submit() {
    const validation = this.profileValidator.isValid(this.form.value);
    if (!validation?.valid) {
      return;
    }

    this.authService.updateProfile(this.form.value).subscribe(
      (success) => {
        this.toastService.info(Exceptions.updateUserSuccess);
      },
      (error) => {
        this.toastService.error(Exceptions.updateUserError);
      },
    );
  }
}
