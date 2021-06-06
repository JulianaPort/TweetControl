import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormInputModule } from '@app/@core/pipes/form/form-input-error.module';
import { SignInPage } from './sign-in.page';

@NgModule({
  declarations: [SignInPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInPage,
      },
    ]),
  ],
})
export class SignInModule {}
