import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonEditComponent } from './person-edit.component';
import { AwesomePeopleService, PersonService, PeopleService } from './person.service';
import { ChildComponent } from './child.component';
import { LoggerService, loggerFactory } from './service/logger.service';
import { NewLoggerService } from './service/new-logger.service';
import { PersonComponent } from './person.component';
import { WriterService } from './service/writer.service';
import { FemaleComponent } from './female.component';
import { FemaleService } from './female.service';

const simpleLogger = {
  log(msg: string) {
    console.log(`I am a simpler logger: ${msg}`);
  },
};

// const loggerFactory = (writer: WriterService) => {
//   return new LoggerService(true, writer);
// };

@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    ChildComponent,
    PersonComponent,
    FemaleComponent,
  ],
  imports: [BrowserModule],
  providers: [
    // PersonService,
    // FemaleService,
    // WriterService,
    // LoggerService,
    // { provide: LoggerService, useClass: LoggerService  },
    // NewLoggerService,
    // { provide: LoggerService, useClass: NewLoggerService  },
    // { provide: LoggerService, useExisting: NewLoggerService },
    // { provide: LoggerService, useValue: simpleLogger },
    // { provide: LoggerService, useFactory: loggerFactory },
    // { provide: LoggerService, useFactory: loggerFactory, deps: [WriterService] },
    // {
    //   provide: PeopleService, useClass: AwesomePeopleService
    // }
    {
      provide: LoggerService,
      useFactory: loggerFactory('AppModule')
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
