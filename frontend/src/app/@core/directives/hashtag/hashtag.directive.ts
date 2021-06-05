import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHashtag]'
})
export class HashtagDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keypress') ngOnChanges() {
    this.onInputChange(null, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }


  onInputChange(event?: any, backspace?: any) {
    let newVal = this.el.nativeElement.value;
    if (backspace && newVal.length == 1) {
      newVal = newVal.replace(/^(\d{0,3})/, '#$1');

    }
    this.el.nativeElement.value = newVal;

  }

}
