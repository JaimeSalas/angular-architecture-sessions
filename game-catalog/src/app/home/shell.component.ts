import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <app-menu></app-menu>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``
})
export class ShellComponent {

}
