import { Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  // selector: 'h1',
  selector: '[first]', // Attribute
  standalone: true,
})
export class FirstDirective implements OnChanges {
 
  @Input() first!: string;
  // @HostBinding() innerText = `I'm a directive`;
  // @HostBinding() get innerText(): string {
  //   return this.first.toUpperCase();
  // }
  @HostBinding() 
  innerHtml = '';
  
  @HostListener('click', ['$event']) onClick($event: Event) {
    // console.log($event);
    this.innerHtml = 'clicked'
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.innerHtml = `<p>${changes['first'].currentValue}</p>`
  }
}


// Component + Directive -> Custom Element (Angular Ivy)

// get prop(): string {  ......  }
// cont t = prop;