import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cartItems = [
    {
      itemName: "Tropicana",
      quantity: 5,
      price: 15
    },
    {
      itemName: "Lays",
      quantity: 3,
      price: 20
    }

  ]

}
