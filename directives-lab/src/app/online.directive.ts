import { Directive, HostBinding, inject } from '@angular/core';
import { OnlineService } from './online.service';

@Directive({
  selector: '[online]',
  standalone: true
})
export class OnlineDirective {
  private online = inject(OnlineService);

  @HostBinding('disabled') get disabled() {
    return this.online.online;
  }

  @HostBinding('class.offline') get offline() {
    return this.online.online;
  }
}
