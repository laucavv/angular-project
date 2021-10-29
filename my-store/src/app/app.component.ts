import { Component } from '@angular/core';
import { Product } from './products-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listProduct: Product[] = [
    {
      name: "bear-shirt",
      img: "./assets/bear-shirt.jpg",
      price:23
    },
    {
      name: "basic-shirt",
      img: "./assets/basic-shirt.png",
      price:22
    },
    {
      name: "cloud-shirt",
      img: "./assets/cloud-shirt.jpg",
      price:32
    },
    {
      name: "coffee-shirt",
      img: "./assets/coffee-shirt.jpg",
      price:29
    },
    {
      name: "dinosaur-shirt",
      img: "./assets/dinosaur-shirt.jpg",
      price:15
    },
    {
      name: "map-shirt",
      img: "./assets/map-shirt.jpg",
      price:15
    },
    {
      name: "mice-shirt",
      img: "./assets/mice-shirt.jpg",
      price:23
    },
    {
      name: "plant-shirt",
      img: "./assets/plant-shirt.jpg",
      price:23
    }
  ]
}
