import { Stats } from 'src/app/shared/enums/stats.enum';

export interface StatsState {
  status: 'IDLE' | 'LOADING' | 'READY';
  result: Stats;
  error: null | string;
}
