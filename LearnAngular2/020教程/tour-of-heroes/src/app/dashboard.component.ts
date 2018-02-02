import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private heroServices: HeroService) {

  }

  ngOnInit(): void {
    this.heroServices.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  heroes: Hero[] = [];
}
