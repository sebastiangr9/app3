import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private items$ = new Subject<any[]>();

  // private items:string[] = [
  //   'Johnny Depp',
  //   'Angelina Jolie',
  //   'Sylvester Stallone',
  //   'Antonio Sanint',
  //   'Carolina Gómez'
  // ]

  private items:any[] = [
    {
      name: 'Johnny Depp',
      nationality: 'USA',
      birthday: '1970'
    },
    {
      name: 'Angelina Jolie',
      nationality: 'UK',
      birthday: '1975'
    },
    {
      name: 'Sylvester Stallone',
      nationality: 'Irlanda',
      birthday: '1961'
    },
    {
      name: 'Antonio Sanint',
      nationality: 'Spain',
      birthday: '1978'
    },
    {
      name: 'Carolina Gómez',
      nationality: 'Colombia',
      birthday: '1982'
    }
  ]

  constructor() { }

  getItems() {
    return this.items;
  }

  get(index) {
    return this.items[index];
  }

  addItem(item) {
    this.items.push(item);
    this.items$.next(this.items);
  }

  getItems$(): Observable<any[]> {
    return this.items$.asObservable();
  }

}
