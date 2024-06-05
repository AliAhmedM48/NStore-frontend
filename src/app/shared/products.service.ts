import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private products: Product[] = [
    {
      id: 1,
      name: 'محفظة جلد',
      description: 'مجموعة عطور راقية تحتوي على عدة روائح مختلفة.',
      image: 'محفظة.jpg',
      price: 220,
    },
    {
      id: 2,
      name: 'توتي باج',
      description: 'ساعة يد أنيقة مصنوعة من الفولاذ المقاوم للصدأ.',
      image: 'توتي.jpg',
      price: 750,
    },
    {
      id: 3,
      name: 'ساعة حائط',
      description: 'قلادة ذهبية فاخرة مع تصميم عصري وأنيق.',
      image: 'ساعة.jpg',
      price: 1200,
    },
    {
      id: 4,
      name: 'كارت العيد',
      description: 'مجموعة تحتوي على أنواع مختلفة من الشاي الفاخر.',
      image: 'كارت.jpg',
      price: 300,
    },
    {
      id: 5,
      name: 'مج حراري',
      description: 'إطار صور رقمي لعرض الصور بجودة عالية.',
      image: 'مج.jpg',
      price: 400,
    },
    {
      id: 6,
      name: 'مج+نوتة',
      description: 'محفظة جلدية فاخرة بتصميم كلاسيكي.',
      image: 'مج+نوتة.jpg',
      price: 200,
    },
    {
      id: 7,
      name: 'منديل كتب كتاب',
      description: 'محفظة جلدية فاخرة بتصميم كلاسيكي.',
      image: 'منديل.jpg',
      price: 200,
    },
    {
      id: 8,
      name: 'نوتة',
      description: 'محفظة جلدية فاخرة بتصميم كلاسيكي.',
      image: 'نوتة.jpg',
      price: 200,
    },
  ];

  private products$ = new Observable<Product[]>((observer) => {
    observer.next(this.products);
  });

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}
