import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseurl:string = " http://api.weatherstack.com/current?";
state:string ="US";

  constructor(private httpClient: HttpClient) { }

  get(query:string, key: string):Observable<Weather>{
    return this.httpClient.get<Weather>(`${this.baseurl}${key}&query=${query}&units=f`)
  }
}
