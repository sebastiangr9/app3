import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import { TestServicesComponent } from './test-services/test-services.component';
import { TestObservablesComponent } from './test-observables/test-observables.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { TestMoviesComponent } from './test-movies/test-movies.component';
import { TestActorsComponent } from './test-actors/test-actors.component';
import { TestCategoriesComponent } from './test-categories/test-categories.component';
import { TestActorDetailComponent } from './test-actor-detail/test-actor-detail.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { TestTmdbMoviesComponent } from './test-tmdb-movies/test-tmdb-movies.component';
import { TestTmdbCreditsComponent } from './test-tmdb-credits/test-tmdb-credits.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'actors',
        component: TestActorsComponent
      },
      {
        path: 'actorDetail/:id',
        component: TestActorDetailComponent
      },
      {
        path: 'categories',
        component: TestCategoriesComponent
      },
      {
        path: 'countries',
        component: TestCountriesComponent
      },
      {
        path: 'tmdb/movies',
        component: TestTmdbMoviesComponent
      },
      {
        path: 'tmdb/credits/:idMovie',
        component: TestTmdbCreditsComponent
      }
    ]),
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,MatChipsModule,
    MatSnackBarModule
  ],
  declarations: [UiTestCardComponent, TestServicesComponent, TestObservablesComponent, TestRoutingComponent, TestMoviesComponent, TestActorsComponent, TestCategoriesComponent, TestActorDetailComponent, TestCountriesComponent, TestTmdbMoviesComponent, TestTmdbCreditsComponent],
  exports: [UiTestCardComponent, TestServicesComponent, TestObservablesComponent, TestRoutingComponent, TestMoviesComponent, TestActorsComponent, TestCategoriesComponent, TestActorDetailComponent, TestCountriesComponent, TestTmdbMoviesComponent, TestTmdbCreditsComponent]
})
export class TestModule { }
