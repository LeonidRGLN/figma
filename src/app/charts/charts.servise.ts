import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Data {
    dt_date:string
    office_id: string
    office_name: string
    qty_shk: number
    qty_shk_cat1: number
    qty_shk_cat2: number
    qty_shk_cat3: number
    qty_shk_cat4: number
}

export interface API{
    data:Data[]
}

@Injectable({
    providedIn: 'root'
})
export class AppServises {

    api = 'https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json'

    constructor(private http: HttpClient){}

    getServe ():Observable<API> {
        return this.http.get<API>(this.api)
    }

}
