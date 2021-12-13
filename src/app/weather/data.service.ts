import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseurl:string = "https://api.weatherstack.com/current?";
state:string ="US";
key:string= "access_key=435785ba3893e6cc6bfdba4d894252f0"

  constructor(private httpClient: HttpClient) { }

  get(query:string):Observable<Weather>{
    return this.httpClient.get<Weather>(`${this.baseurl}${this.key}&query=${query}&units=f&forecast_days=7`)
  }
}
