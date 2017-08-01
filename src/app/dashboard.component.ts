import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:'my-dashboard',
    styleUrls:['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})



export class DashboardComponent implements OnInit{
    heroes : Hero[] = [];

    constructor(private heroService : HeroService){}

    ngOnInit():void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
    }
}