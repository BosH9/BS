import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  url:string = 'http://localhost:59327/';
  
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
   
  }

  getBikes(userId:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    let getbikesurl = this.url+"api/ActiveBikes"
    return this.http.post(getbikesurl,httpOptions);
  }

}
