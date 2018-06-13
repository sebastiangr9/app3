import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private items:any[] = [
    'Action',
    'Adventure',
    'Comedy',
    'War'
  ]
  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }
}
