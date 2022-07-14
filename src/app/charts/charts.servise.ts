import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppServises {

    api = 'https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json'

    constructor(private http: HttpClient){}

    getServe (){
        return this.http.get(this.api)
    }

}
