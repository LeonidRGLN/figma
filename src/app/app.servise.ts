import { HttpClient } from "@angular/common/http";



export class AppServise {

    api = 'httрs://ya.ru/'

    constructor(private http: HttpClient){}

    getServe (){
        return this.http.get(this.api)
    }

}