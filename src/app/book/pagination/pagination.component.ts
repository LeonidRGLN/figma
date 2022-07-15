import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

let Countss = 1;
let Countss2 = 1;


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css','../book.component.css']
})

export class PaginationComponent {
  
  routerlink:string[]|string = ['/home','/home/sample','/home/sample2','/home/sample3','/home/sample4','/home/sample5','/home/sample6','/home/sample7','/home/sample8','/home/table']
  
  constructor(private router:Router) { }
  
  pageNext(){
    Countss++
    Countss2++

    this.router.navigate([this.routerlink[Countss-1]])

    if(Countss >= 10){
      Countss = 1;
    }
    if(Countss2 >= 10){
      Countss2 = 1
    }
  }
  pageNext2(){
    Countss= Countss + 2
    Countss2= Countss + 2
    this.router.navigate([this.routerlink[Countss-1]])

    if(Countss >= 11){
      Countss = 1;
    }
    if(Countss2 >= 11){
      Countss2 = 2
    }
  }

  Knopka1 = Countss2 ;
  Knopka2 = Countss2 +1;
  Knopka3 = Countss2 +2;
}
