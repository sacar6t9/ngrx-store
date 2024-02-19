import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProuctCardComponent } from '../shared/components/prouct-card/prouct-card.component';
import { Iproduct } from '../shared/models/product.interface';
import {ProuctApiService} from '../shared/services/prouct-api.service'
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe,CommonModule,ProuctCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productApi=inject(ProuctApiService)
  http=inject(HttpClient)
  products$=  this.productApi.getProducts() as Observable<Iproduct[]>
  constructor(private store:Store<{cart:{products:Iproduct[]}}>){}
  addItemToCart(product:Iproduct){
this.store.dispatch(addToCart({product}))
}
ngOnInit(): void {
  
}
}