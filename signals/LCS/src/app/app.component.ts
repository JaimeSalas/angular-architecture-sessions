import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  // ngOnInit(): void {
  //   this.sub = of(2, 4, 6, 8).subscribe((item) =>
  //     console.log(`Value from of: `, item)
  //   );
  //   this.subArray = of([2, 4, 6, 8]).subscribe((item) =>
  //     console.log(`Value from of (array): `, item)
  //   );
  //   this.subFrom = from([20, 15, 10, 5]).subscribe({
  //     next(item) {
  //       console.log('from', item);
  //     },
  //     error(err) {
  //       console.log(err);
  //     },
  //     complete() {
  //       console.log('completed');
  //     },
  //   });
  //   // this.subEvent = fromEvent(document, 'click').subscribe({
  //   //   next: (ev) => {
  //   //     console.log(ev.target);
  //   //   },
  //   //   error: (err) => console.log(err),
  //   //   complete: () => console.log('complet'),
  //   // });

  //   const keys: string[] = [];
  //   this.subEvent = fromEvent(document, 'keydown').subscribe((ev) => {
  //     keys.push((ev as KeyboardEvent).key);
  //     console.log('keys', keys);
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  //   this.subArray.unsubscribe();
  //   this.subFrom.unsubscribe();
  //   this.subEvent.unsubscribe();
  // }
}
