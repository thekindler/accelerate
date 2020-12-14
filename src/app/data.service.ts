import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {data} from './data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url="./data.json"
  constructor(private http:HttpClient) { }
  // getdata(){
  //   return this.http.get(this.url);
  // }
  getdata(): Observable<data[]> {
    return this.http.get<data[]>(this.url);  
}
}
