import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
//heroSerive could get Hero form anywhere
//* for example, In local test, you can get the Hero'data
// form  local storage, but when web server is builed
// down, you can change the data source form the server,
// just change this class.
export class HeroService
{
    getHeroes(): Promise<Hero[]>
    {
           return Promise.resolve(HEROES); 
    }

    getHeroesSlowly(): Promise<Hero[]>
    {
        return new Promise(resolve =>
        {
            setTimeout(() => resolve(this.getHeroes()),2000);
        });
    }
}