import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>The best site for oldie good games</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class WelcomeComponent {
  title = 'Game Catalog';
}
