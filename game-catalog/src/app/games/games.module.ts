import { NgModule } from '@angular/core';
import { GameService } from './game.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  providers: [GameService]
})
export class GamesModule { }
