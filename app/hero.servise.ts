/**
 * Created by USER on 1.2.2017 г..
 */
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from'./hero';

@Injectable()
export class HeroService{


  getAllHeroes():Hero[]{
    return HEROES;
  }
}
