import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { thanosDecrement } from 'src/app/actions/thanos.actions';
import { IParentState } from 'src/app/reducers/global.reducer';

@Component({
  selector: 'app-thanos',
  templateUrl: './thanos.component.html',
  styleUrls: ['./thanos.component.scss'],
})
export class ThanosComponent {
  peopleNumber$: Observable<number>;

  constructor(private store: Store<IParentState>) {
    this.peopleNumber$ = store.select('peopleNumber');
  }

  chas(): void {
    this.store.dispatch(thanosDecrement());
  }
}
