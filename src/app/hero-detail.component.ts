import {Component , Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location } from '@angular/common';
import {HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component(
    {
        selector: 'hero-detail',
        styleUrls:['./hero-detail.component.scss'],
        templateUrl:'./hero-detail.component.html',
    }
)

export class HeroDetailComponent implements OnInit
{
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(
            (hero) =>
             {
                this.hero = hero;
                console.log(this.hero.id);
            });
    }

    goBack(): void 
    {
        this.location.back();
    }
    save(): void
    {
        this.heroService.update(this.hero).then(() => this.goBack());
    }

   @Input() hero:Hero;
}