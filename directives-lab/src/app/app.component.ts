import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDirective } from './first.directive';
import { BasicComponent } from './basic/basic.component';
import { TrackDirective } from './track.directive';
import { TrackingService } from './tracking.service';
import { OnlineDirective } from './online.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstDirective,
    BasicComponent,
    TrackDirective,
    OnlineDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tracking = inject(TrackingService);

  one = { message: 'Hello one' };
  two = { message: 'Hello two' };
  three = { message: 'Hello three' };
}
