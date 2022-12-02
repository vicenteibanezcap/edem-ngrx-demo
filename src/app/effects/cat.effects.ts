import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import { CatService } from '../pages/cat/services/cat.service';

@Injectable()
export class CatEffects {
  constructor(private actions$: Actions, private catService: CatService) {}

  loadCatFact$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Cat Fact API] Fact Loaded Success!'),
      mergeMap(() =>
        this.catService.getCatFact().pipe(
          map((catFact) => ({
            type: '[Cat Fact API] Fact Loaded Success!',
            payload: catFact,
          })),
          catchError(() => EMPTY)
          // catchError(() => of({ type: '[Cat Fact API] Fact Loaded Error' }))
        )
      )
    )
  );
}
