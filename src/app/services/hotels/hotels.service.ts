import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { 
    
  }

  getAllHotels(){
    return this.http.get<Hotel[]>(`http://localhost:3000/api/hotels`);
  }

  getHotelById(id: string) {
    return this.http.get<Hotel>(`http://localhost:3000/api/hotels/${id}`);
  }
}
