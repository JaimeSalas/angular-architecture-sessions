import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
      }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
