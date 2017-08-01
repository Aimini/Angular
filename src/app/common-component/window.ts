import { Component, OnInit } from '@angular/core';

@Component({
    selector:'aide-window',
    styleUrls:['./window.scss'],
    templateUrl: './window.html',
})



export class Window {
    constructor(private inner_selecter:string,private title:string){};
}