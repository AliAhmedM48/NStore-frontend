import {
  Component,
  OnDestroy,
  OnInit,
  TransferState,
  makeStateKey,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/product.model';
import { ProductsService } from '../../shared/products.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit, OnDestroy {
  product: Product | null;
  editForm!: FormGroup;
  private _getProductSubscription: Subscription = new Subscription();
  private _updateProductSubscription: Subscription = new Subscription();
  constructor(
    private _TransferState: TransferState,
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this._initEditForm();
    this.product = this._TransferState.get(
      makeStateKey<Product>('product'),
      null
    );
  }

  ngOnInit(): void {
    if (this.product) {
      this._setForm(this.product);
    } else {
      this._fetchProduct();
    }
  }

  private _initEditForm() {
    this.editForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });
  }

  private _setForm(productData: Product) {
    this.editForm.patchValue({
      id: productData.id,
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    });
  }

  private _fetchProduct() {
    const id = this._ActivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this._getProductSubscription = this._ProductsService
        .getProduct(+id)
        .subscribe({
          next: (response) => {
            if (response) {
              this.product = response;
              this._setForm(response);
            }
          },
        });
    }
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const image = input.files[0];
      this.editForm.patchValue({ image });
      this.editForm.get('image')?.updateValueAndValidity();
    } else {
      this.editForm.patchValue({ image: null });
      this.editForm.get('image')?.updateValueAndValidity();
    }
  }

  onEdit() {
    if (this.editForm.valid) {
      this._updateProductSubscription = this._ProductsService
        .updateProduct(this.editForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
          },
        });
    }
  }
  ngOnDestroy(): void {
    this._getProductSubscription.unsubscribe();
    this._updateProductSubscription.unsubscribe();
  }
}
