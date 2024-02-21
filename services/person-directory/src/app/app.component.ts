import { Component } from '@angular/core';
import { LoggerService, loggerFactory } from './service/logger.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>Logger services</h2>
    <app-person></app-person>
  `,
  // providers: [
  //   { provide: LoggerService, useFactory: loggerFactory('AppComponent') },
  // ],
})
export class AppComponent {}
