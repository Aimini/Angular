import { Component , Input , OnInit} from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import {Router} from '@angular/router'

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

  constructor(
    private router: Router,
    private heroService:HeroService){}

  ngOnInit():void
  {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  add(name: string): void
  {
    name = name.trim();
    if(!name){return;}
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }

  gotoDetail(): void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }


  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        //remove deleted hero from heroes
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
