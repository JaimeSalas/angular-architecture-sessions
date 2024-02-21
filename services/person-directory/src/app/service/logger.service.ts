import { Injectable, Inject } from '@angular/core';
// import { WriterService } from './writer.service';

export const loggerFactory = (prefix: string) => () =>
  new LoggerService(prefix);

// const partial = loggerFactory('myPrefix');
// const partial2 = loggerFactory('myPrefix2');

// partial()

@Injectable()
export class LoggerService {
  constructor(@Inject(String) private prefix: string) {}

  log(msg: string) {
    console.log(`Logger (${this.prefix}): ${msg}`);
  }
}
