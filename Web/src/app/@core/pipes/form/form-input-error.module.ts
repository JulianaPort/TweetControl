import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputErrorPipe } from './form-input-error.pipe';

@NgModule({
  declarations: [InputErrorPipe],
  imports: [CommonModule],
  exports: [InputErrorPipe],
})
export class FormInputModule {}
