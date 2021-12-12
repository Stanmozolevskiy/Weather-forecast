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
    this.getTheData();
    this.cityForm = this.fB.group({
      city:'',
    });
  }
  
  onSubmit(){
    this.defaultCity =this.cityForm.get('city')?.value;
    this.getTheData();
    this.cityForm.reset(); 
  }
  
  //need this func to try 2 different api keys 
  //because the free version alows you to do 250 calls
  private getTheData(){
    const key1:string = "access_key=435785ba3893e6cc6bfdba4d894252f0";
    const key2:string = "access_key=8e443c423702739b3e03b494da5ffc0a//";
    return  this.dataService.get(this.defaultCity, key1).subscribe(res=>{
      if(res.error.info){
        this.dataService.get(this.defaultCity, key2).subscribe(res=>{
           this.weather = res;
           if(res.error.info){
             this.isAPILimitReached = true;
              return;
           }
          }) 
        }
           else
            this.weather = res;
    });
  }
  private defaultCity: string ='Portsmouth nh';
}
