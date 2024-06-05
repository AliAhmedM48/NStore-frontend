import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit, OnDestroy {
  constructor(private _Router: Router) {}
  ngOnInit(): void {
    console.log(history.state.product);
  }
  ngOnDestroy(): void {}
}
