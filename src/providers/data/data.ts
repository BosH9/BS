import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../../modals/bike';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url:string = 'http://localhost:30000/'
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getBikes(userId:string){
    return this.http.get<Bike[]>(this.url+userId);
  }

}
