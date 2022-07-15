import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StatsApiService } from 'src/app/shared/stats/stats-api.service';
import { StatsApiActions } from './stats-api.actions';
import { StatsActions } from './stats.actions';

@Injectable()
export class StatsEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsActions.load),
      switchMap(() =>
        this.service.loadStats().pipe(
          map((stats) => StatsApiActions.loadSuccess({ stats })),
          catchError((error) => of(StatsApiActions.loadFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: StatsApiService) {}
}
