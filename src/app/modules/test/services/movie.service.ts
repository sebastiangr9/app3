import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private items:any[] = [
    'Rambo',
    'The Tourist',
    'El Paseo'
  ]
  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }
}
