import { Directive, HostListener, Input, inject } from '@angular/core';
import { TrackingService } from './tracking.service';

@Directive({
  selector: '[track]',
  standalone: true,
})
export class TrackDirective {
  @Input() track!: string;

  // constructor(private trackService: TrackingService) { }
  private trackService = inject(TrackingService);

  @HostListener('click')
  onClick() {
    this.trackService.log(
      JSON.stringify({ event: 'click', message: this.track })
    );
  }
  
  @HostListener('mouseover', ['$event'])
  onMouseover($event: Event) {
    $event.preventDefault();
    this.trackService.log(
      JSON.stringify({ event: 'mouseover', message: this.track })
    );
  }


}
