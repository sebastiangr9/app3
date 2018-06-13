import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-test-actor-detail',
  templateUrl: './test-actor-detail.component.html',
  styleUrls: ['./test-actor-detail.component.scss']
})
export class TestActorDetailComponent implements OnInit {

  actor:any;
  private sub: any;

  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id:number = +params['id'];
      this.actor = this.actorService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
