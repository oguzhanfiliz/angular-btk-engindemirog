import {
  Component,
  OnInit
} from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {}
  title = "Ürün Listesi"
  filterText="a"
  products: Product[] = [{
      id: 1,
      name: "Laptop",
      price: 15,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 1,
      name: "Laptop",
      price: 15,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 1,
      name: "Laptop",
      price: 15,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 1,
      name: "Laptop",
      price: 15,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 1,
      name: "Laptop",
      price: 15,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl: "https://picsum.photos/200/100"
    }, {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4Tech",
      imageUrl: "https://picsum.photos/200/100"
    },

  ];
  emptyProducts = "Ürün Listesi boş"
  ngOnInit(): void {}

}
