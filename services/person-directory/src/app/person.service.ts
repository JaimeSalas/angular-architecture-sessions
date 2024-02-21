import { Injectable } from '@angular/core';

export abstract class PeopleService {
  abstract getPeople(): { name: string }[];
}

export class AwesomePeopleService extends PeopleService {
  getPeople(): { name: string }[] {
    return [{ name: 'g' }];
  }
}

export class RegularPeopleService extends PeopleService {
  getPeople(): { name: string }[] {
    return [{ name: 'g' }];
  }
}

@Injectable()
export class PersonService {
  name = 'Jai';

  getPerson() {
    return {
      name: this.name,
      age: 6,
    };
  }

  // setPersonName(value: string) {
  //   this.name = value;
  // }
}
