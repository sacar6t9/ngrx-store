import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';
import { AppState } from '../states/app.state';
import { CommonModule } from '@angular/common';
import { decrementProduct, incrementProduct, removeItem } from '../states/cart/cart.action';
import { increment } from '../states/counter/counter.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cartItems$=this.store.select(selectCartProducts)
totalPrice$=this.store.select(selectTotal)
constructor(private store:Store<AppState>){}

remove(productId:number){
  this.store.dispatch(removeItem({productId}))
}
increment(productId:number){
  this.store.dispatch(incrementProduct({productId}))
}
decrement(productId:number){
  this.store.dispatch(decrementProduct({productId}))
}
}
