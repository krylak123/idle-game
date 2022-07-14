import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { StatsModule } from '../stats/stats.module';
import { OptionsModule } from '../options/options.module';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, StatsModule, OptionsModule, GameModule],
  exports: [BoardComponent],
})
export class BoardModule {}
