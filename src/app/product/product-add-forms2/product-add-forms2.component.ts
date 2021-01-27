import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,
    private productService:ProductService,private alertifiyService:AlertifyService) { }
  productAddForm!: FormGroup;
  categories : Category[]|undefined;
  prodcut : Product = new Product();
  createProductAddForm(){
    this.productAddForm =this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],
    });
  }
  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => { this.categories = data });

  }
  add(){
    if(this.productAddForm.valid){
      this.prodcut=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.prodcut).subscribe(data=>{
      this.alertifiyService.success(data.name+" başarıyla eklendi.")
    });
  }

}
