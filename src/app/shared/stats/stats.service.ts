import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { StatsActions } from '@store/stats';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private store: Store<AppState>) {}

  public loadStats() {
    this.store.dispatch(StatsActions.load());
  }
}
