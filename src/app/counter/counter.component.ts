import { Component } from '@angular/core';
import { AppState } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../states/counter/counter.selecter';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
// count$:Observable<number>
constructor(private store:Store<AppState>){
  // this.count$=this.store.select(selectCount)
}
increment()
{
  this.store.dispatch(increment())
}
decrement(){
  this.store.dispatch(decrement())
}
reset(){this.store.dispatch(reset())}
}
