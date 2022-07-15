import { createAction, props } from '@ngrx/store';
import { Stats } from 'src/app/shared/enums/stats.enum';

enum StatsApiActionsName {
  STATS_LOAD_SUCCESS = '[Stats/API] Load data success',
  STATS_LOAD_FAIL = '[Stats/API] Load data fail',
}

export class StatsApiActions {
  static loadSuccess = createAction(StatsApiActionsName.STATS_LOAD_SUCCESS, props<{ stats: Stats }>());
  static loadFail = createAction(StatsApiActionsName.STATS_LOAD_FAIL, props<{ error: any }>());
}
