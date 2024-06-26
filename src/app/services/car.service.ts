import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url: string = 'http://localhost:3000/cars'
  urlFavorites: string = 'http://localhost:3000/favorites'

  constructor (private http: HttpClient) {}


  getCars(): Observable<Car[]> {
    return this.http.get(this.url) as Observable<Car[]>
  }

  getCar(id: string): Observable<Car> {
    return this.http.get(`${this.url}/${id}`) as  Observable<Car>
  }

  deleteCar(id: string): Observable<any> {
    return this.http.delete (`${this.url}/${id}`)
  }
  

  addCar(car: Car): Observable<any> {
    return this.http.post(this.url, car)
  }


  editCar(id:string, car: Car): Observable<any> {
    return this.http.put(`${this.url}/${id}`, car)
  }

  postCarToFavorites(car: Car) {
    return this.http.post<Car>(this.urlFavorites, car)
  }


  getCarsFromFavorites(): Observable<Car[]> {
    return this.http.get(this.urlFavorites) as Observable<Car[]>
  }

  
}
