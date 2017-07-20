import { Component , Input , OnInit} from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit 
{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService){}
  ngOnInit():void
  {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}
