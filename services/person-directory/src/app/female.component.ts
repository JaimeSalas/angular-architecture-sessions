import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { FemaleService } from './female.service';

@Component({
  selector: 'app-female',
  template: `
    <h3>female</h3>
    <pre>{{ person | json }}</pre>

    <app-person></app-person>
  `,
  styles: ``,
  providers: [
    { provide: PersonService, useClass: FemaleService }
  ]
})
export class FemaleComponent {
  person: any;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.person = this.personService.getPerson();
  }
}
