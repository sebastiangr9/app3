import { Component, OnInit } from '@angular/core';
import { TmdbMoviesService } from '../services/tmdb-movies.service';

@Component({
  selector: 'app-test-tmdb-movies',
  templateUrl: './test-tmdb-movies.component.html',
  styleUrls: ['./test-tmdb-movies.component.scss']
})
export class TestTmdbMoviesComponent implements OnInit {

  public movies:any;

  constructor(private tmdbMoviesService: TmdbMoviesService) { }

  ngOnInit() {
    this.tmdbMoviesService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
