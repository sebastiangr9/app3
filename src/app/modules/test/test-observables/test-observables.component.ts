import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit {

  actors: any;
  actors$: Observable<any[]>;

  constructor(private actorService: ActorService) { }

  ngOnInit() {

    // const MyObservable = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('mensaje 1');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('mensaje 2');
    //   }, 4000);

    //   setTimeout(() => {
    //     observer.error('un error');
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 6000);
    // });

    // MyObservable.subscribe(
    //   (data: string) => {
    //     console.log(data);
    //   },
    //   (error: string) => {
    //     console.error(error);
    //   },
    //   () => {
    //     console.log('completo!!');
    //   }
    // );

    this.actors = this.actorService.getItems();

    this.actors$ = this.actorService.getItems$();
    this.actors$.subscribe(
      actors => {
        this.actors = actors
      }

    );
  }

  add() {
    this.actorService.addItem('another actor');
  }

}
