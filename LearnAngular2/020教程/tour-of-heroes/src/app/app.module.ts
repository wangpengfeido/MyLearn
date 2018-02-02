import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from "./dashboard.component";
import {HttpModule} from "@angular/http";

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memoey-data';

import {HeroService} from "./hero.service";
import {HeroSearchComponent} from './hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
