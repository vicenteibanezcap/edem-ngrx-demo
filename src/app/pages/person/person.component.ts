import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  massiveIncrement,
  reset,
} from 'src/app/actions/person.actions';
import { IParentState } from 'src/app/reducers/global.reducer';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  peopleNumber$: Observable<number>;

  constructor(private store: Store<IParentState>) {
    this.peopleNumber$ = store.select('peopleNumber');
  }

  addPerson(): void {
    this.store.dispatch(increment());
  }

  removePerson(): void {
    this.store.dispatch(decrement());
  }

  massiveIncrement(): void {
    this.store.dispatch(massiveIncrement({ totalIncrement: 100 }));
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
