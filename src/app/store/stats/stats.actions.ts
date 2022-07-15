import { createAction } from '@ngrx/store';

enum StatsActionsName {
  STATS_LOAD = '[Stats] Load data',
}

export class StatsActions {
  static load = createAction(StatsActionsName.STATS_LOAD);
}
