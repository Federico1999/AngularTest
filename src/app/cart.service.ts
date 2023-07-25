import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private htpp: HttpClient) {}
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.htpp.get<{ type: String; price: Number }[]>(
      '/assets/shipping.json'
    );
  }
}
