import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {MatSnackBar} from '@angular/material';

import {DatabaseService} from '../services/database.service'
import {ActorService} from '../services/actor.service'


@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {

  public db:any[];
  db$: Observable<any>;

  constructor( 
    private databaseService: DatabaseService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.db = this.databaseService.getItems();
    this.db$ = this.databaseService.getItems$();
    this.db$.subscribe(
      db => {
        console.log(db);
        const message:string = "the movie " + db.last.movie 
          + " was modified, the ranking was " + db.last.ranking
          + " and its current values is " + db.current;
        this.openSnackBar(message);
      }
    );
  }

  update(idx: number, ranking:number) {
    this.databaseService.updateRanking(idx, ranking);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }
  

}
