import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import {HeroesComponent} from "./heroes.component";
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroService} from "./hero.service";
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponentComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponentComponent
      }
    ])

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

