import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ActorService} from './actor.service'
import {MovieService} from './movie.service'
import { CategoryService } from './category.service';
import { CountryService } from './country.service';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private items$ = new Subject<any>();

  private items:any[] = [
    {
      movie: this.movieService.get(1),
      actors: [
        this.actorService.get(0),
        this.actorService.get(1)
      ],
      category: this.categoryService.get(1),
      country: this.country.get(1),
      ranking: 9.5
    },
    {
      movie: this.movieService.get(2),
      actors: [
        this.actorService.get(3),
        this.actorService.get(4)
      ],
      category: this.categoryService.get(2),
      country: this.country.get(0),
      ranking: 8.6
    },
    {
      movie: this.movieService.get(0),
      actors: [
        this.actorService.get(2),
      ],
      category: this.categoryService.get(0),
      country: this.country.get(1),
      ranking: 7.8
    }
  ];

  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private categoryService: CategoryService,
    private country: CountryService
  ) { }

  getItems() {
    return this.items;
  }

  updateRanking(idx:number, ranking:number) {

    let last = Object.assign({}, this.items[idx]);
    // let last = this.items[idx];
    let current:number = ranking;
    let movie:string = this.items[idx].movie;
    this.items[idx].ranking = ranking;
    this.items$.next(
      {
        last: last,
        current: current,
        movie: movie
      }
    );
  }

  getItems$(): Observable<any> {
    return this.items$.asObservable();
  }

}
