import { createReducer, on } from '@ngrx/store';
import { StatsState } from './state.state';
import { StatsApiActions } from './stats-api.actions';
import { StatsActions } from './stats.actions';

const initialState: StatsState = {
  status: 'IDLE',
  result: {
    click: 0,
    increaseValue: 1,
    money: 0,
  },
  error: null,
};

export const StatsReducer = createReducer(
  initialState,
  on(StatsActions.load, (state) => {
    return {
      ...state,
      status: 'LOADING',
    };
  }),
  on(StatsApiActions.loadSuccess, (state, { stats }) => {
    return {
      ...state,
      result: stats,
      status: 'READY',
    };
  }),
  on(StatsApiActions.loadFail, (state, { error }) => {
    return {
      ...state,
      status: 'READY',
      error,
    };
  })
);
