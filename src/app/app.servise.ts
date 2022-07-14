import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AppServise {

    api = 'httрs://ya.ru/'

    constructor(private http: HttpClient){}

    getServe (){
        return this.http.get(this.api)
    }

}

