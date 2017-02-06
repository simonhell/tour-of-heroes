/**
 * Created by Simon on 02.02.2017.
 */
import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  template:`
  <h1>{{title}}</h1>
  <nav>
  <a routerLink="/heroes">Heroes</a>
  <a routerLink="/dashboard">Dashboard</a>

  </nav>
  <router-outlet></router-outlet>`,

})

export class AppComponent {
  title='Tour of Heroes';

}

