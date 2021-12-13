import { Weather } from './../weather';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather!: Weather;
  cityForm!:FormGroup;
  isAPILimitReached: boolean = false;
  
  constructor(private dataService: DataService, private fB: FormBuilder) { }
  
  ngOnInit(): void {
    this.dataService.get(this.defaultCity).subscribe(res=>{
      this.weather = res;
    });
    this.cityForm = this.fB.group({
      city:'',
    });
  }
  
  onSubmit(){
    this.dataService.get(this.cityForm.get('city')?.value).subscribe(res=>{
      this.weather = res;
    });
    this.cityForm.reset(); 
  }
  
 
  private defaultCity: string ='Portsmouth nh';
}
