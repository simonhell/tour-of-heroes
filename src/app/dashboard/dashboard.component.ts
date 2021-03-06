import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] = [];



  constructor(private heroService:HeroService) { }



  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

}
