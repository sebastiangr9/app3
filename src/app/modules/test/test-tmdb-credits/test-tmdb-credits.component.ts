import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmdbCreditsService } from '../services/tmdb-credits.service';
// import { Response } from '@angular/http';

@Component({
  selector: 'app-test-tmdb-credits',
  templateUrl: './test-tmdb-credits.component.html',
  styleUrls: ['./test-tmdb-credits.component.scss']
})
export class TestTmdbCreditsComponent implements OnInit {

  private routerSubscribe: any;
  public cast: any;

  constructor(
    private tmdbCreditsService: TmdbCreditsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let idMovie: number = +params['idMovie'];
      this.tmdbCreditsService.getCredits(idMovie).subscribe(
        (data:any) => {
          this.cast = data
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

}
