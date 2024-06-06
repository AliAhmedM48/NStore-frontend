import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../shared/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit, OnDestroy {
  addForm!: FormGroup;
  private _addProductSubscription: Subscription = new Subscription();

  constructor(
    private _ProductsService: ProductsService,
    private _Router: Router
  ) {
    this._initAddForm();
  }

  ngOnInit(): void {}

  private _initAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null),
      price: new FormControl(null, [Validators.required]),
    });
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const image = input.files[0];
      this.addForm.patchValue({ image });
      this.addForm.get('image')?.updateValueAndValidity();
    } else {
      this.addForm.patchValue({ image: null });
      this.addForm.get('image')?.updateValueAndValidity();
    }
  }

  onAdd() {
    if (this.addForm.valid) {
      this._addProductSubscription = this._ProductsService
        .createOne(this.addForm.value)
        .subscribe({
          next: (response) => {
            this._Router.navigate(['/admin/products']);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this._addProductSubscription.unsubscribe();
  }
}
