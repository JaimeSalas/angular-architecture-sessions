import { NgModule } from '@angular/core';
import { GameService } from './game.service';
import { SharedModule } from '../shared/shared.module';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [GameService]
})
export class GamesModule { }
