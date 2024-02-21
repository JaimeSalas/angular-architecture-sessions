import { Injectable } from '@angular/core';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root',
})
export class FemaleService extends PersonService {
  override getPerson(): { name: string; age: number } {
    const person = super.getPerson();
    person.name = 'lau';
    (person as any).gender = 'F';
    return person;
  }
}
