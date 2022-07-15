import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  public isBonus = false;
  public imgDefault = 'assets/click_default.jpeg';
  public imgBonus = 'assets/click_bonus.png';

  public onBtnClick() {
    console.log('claim cash');
  }
}
