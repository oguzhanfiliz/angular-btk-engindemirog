import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css']
})
export class ProductAddForms1Component implements OnInit {

  constructor() { }
  model : Product ;= new Product();
  ngOnInit(): void {
  }

}
