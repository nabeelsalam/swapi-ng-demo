import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    constructor(private http:HttpClient){

    }
    callAPi(url:string){
        return  this.http
        .get(url);
    }
}