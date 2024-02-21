import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-child',
  template: `
    <h4>Child component</h4>
    
    <app-person-edit></app-person-edit>
  `,
  styles: ``,
  providers: [PersonService]
})
export class ChildComponent {
  constructor(public personService: PersonService) {}

  
}
