import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-prouct-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './prouct-card.component.html',
  styleUrl: './prouct-card.component.scss'
})
export class ProuctCardComponent {
@Input() product!:Iproduct;
@Output() handleAdd=new EventEmitter()

addToCart(product:Iproduct){
  this.handleAdd.emit(product)
}
}
