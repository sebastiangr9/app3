import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

  constructor(private http: HttpClient) {  }

  getCredits (idMovie: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6')
      .pipe(
        map(
          (data: any) => {
            return data.cast.map((item) => {
              return {
                id: item.id,
                name: item.name,
                character: item.character
              }
            });
          }
        )
      );
  }
}
