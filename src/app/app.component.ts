import { Component , Input} from '@angular/core';
import { Hero } from './hero';


const HEROES: Hero[] =
[
  {id: 11, name: 'Mr . Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RuberMan'},
  {id: 17, name: 'Dyanma'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
       (click)="onSelect(hero)"
       [class.selected]="hero === selectedHero">
        <span class = "badge">{{hero.id}}.</span> 
        <span class = "badge-name">{{hero.name}}</span>
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `
})


export class AppComponent {
  heroes = HEROES;
  title = 'Tour of Heroes';
  selectedHero: Hero;

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}
