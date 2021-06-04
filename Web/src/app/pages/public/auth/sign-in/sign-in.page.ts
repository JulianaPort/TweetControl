import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/@core/services/alert/alert.service';
import { Path } from '@core/structs';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  returnUrl: string;

  loginForm: FormGroup = this.formBuilder.group({});
  loading = false;
  submitted = false;
  notFoundUser = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') ||
      `/${Path.Dashboard}`;


  }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
          this.notFoundUser = true;
        }
      });

  }
}
