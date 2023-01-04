import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }


  getAllCities(){
    return this.http.get<City[]>('http://localhost:3000/api/cities');
  }
}
