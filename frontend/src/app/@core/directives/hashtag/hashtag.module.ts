import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HashtagDirective } from './hashtag.directive';

@NgModule({
  declarations: [HashtagDirective],
  imports: [CommonModule],
  exports: [HashtagDirective],
})
export class HashtagModule { }
