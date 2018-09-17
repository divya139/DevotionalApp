import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Music} from './musicObj';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  result;
  music:Music[];
  constructor(private _http:Http) {

   }
   getMusicDetails():Observable<Music[]>
   {
      // return this._http.get('/viewSongs').map(response => response.json().data).subscribe((data)=>{console.log(data);
      return this._http.get('/musicDetails').map(this.extractData).catch(this.handleErrorObservable);
    
       
  
 
    
   }
   private extractData(res:Response)
   {
     let body = <Music[]>res.json().data;
     return body || [];
   }
   private extractDataID(res:Response)
   {
     let body = <Music>res.json().data;
     return body;
   }
   private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
} 
   postMusicDetails(musicDetails)
   {
   
  this._http.post('/insert',musicDetails).subscribe(
    res => {
        const response = res.text();
    }
);
   }
   getMusicDetailsID(id)
   {
    return this._http.get('/musicDetails/'+id).map(this.extractDataID).catch(this.handleErrorObservable);
   }

}
