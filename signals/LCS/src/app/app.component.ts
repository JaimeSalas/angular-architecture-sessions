import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  concatMap,
  delay,
  map,
  mergeMap,
  of,
  range,
  switchMap,
  tap,
} from 'rxjs';
// import { Subscription, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pageTitle = 'Lemoncode Store';
  cartCount = 0;

  // sub!: Subscription;
  // subArray!: Subscription;
  // subFrom!: Subscription;
  // subEvent!: Subscription;
  // subscriptions: Subscription[] = [];

  ngOnInit(): void {
    // this.concatMapStart();
    // this.mergetMapStart();
    // this.switchMapStart();
  }

  private concatMapStart() {
    range(1, 5)
      .pipe(
        tap((x) => x),
        concatMap((i) => of(i).pipe(delay(this.randomDelay()))),
        tap((x) => x)
      )
      .subscribe((i) => console.log('concatMap: ', i));
  }

  private mergetMapStart() {
    range(1, 5)
      .pipe(
        tap((x) => x),
        mergeMap((i) => of(i).pipe(delay(this.randomDelay()))),
        tap((x) => x)
      )
      .subscribe((i) => console.log('mergeMap: ', i));
  }

  private switchMapStart() {
    range(1, 5)
      .pipe(
        tap((x) => x),
        switchMap((i) => of(i).pipe(delay(this.randomDelay()))),
        tap((x) => x)
      )
      .subscribe((i) => console.log('swithcMap: ', i));
  }

  private randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  //   this.subArray.unsubscribe();
  //   this.subFrom.unsubscribe();
  //   this.subEvent.unsubscribe();
  // }
}
