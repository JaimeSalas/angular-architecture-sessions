import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuardService: CanActivateFn = (
  _,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  authService.redirectUrl = state.url;
  router.navigate(['/login']);

  return false;
};

// const wait = (): Promise<void> =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(undefined);
//     }, 100);
//   });

// const myAsync = async () => {
//     // do stuff
//     const op1 = 8;
//     const op2 = 8;
//     const result = op1 + op2;
//     await wait();
//     return result;
// };

// const greet = () => console.log('greet');

// myAsync();
// greet();


