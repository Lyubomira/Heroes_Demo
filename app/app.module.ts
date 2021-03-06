import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeroListComponent} from "./hero-list.component";
import {HeroService} from "./hero.servise";


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService]
})
export class AppModule { }
