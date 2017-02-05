/**
 * Created by USER on 1.2.2017 г..
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.servise';
import {Hero} from './hero';

@Component({
  selector:'hero-list',
  template:`<h2>My Heroes</h2>
<ul class="heroes">
 <li class="badge" *ngFor="let hero of heroes" [class.selected]='hero===selectedHero'(click)="onSelect(hero)">
 <span>{{hero.id}}</span> {{hero.name}}</li>
</ul>
 
 <div *ngIf="selectedHero">
 <h2>{{selectedHero.name}} details!</h2>
 <div><label>id: </label>{{selectedHero.id}}</div>
  <div><label>Name: </label>
  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
  </div>
`
})

export class HeroListComponent{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getAllHeroes();

  }
  onSelect(hero:Hero){
    this.selectedHero = hero;
  }



}
