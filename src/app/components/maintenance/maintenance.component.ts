import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent implements OnInit{

  cars: Car[] = []

  constructor (private carService: CarService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cars = this.carService.cars
  }

  createCar() {

  }

  editCar(id: string) {

  }

  deleteCar(id: string) {
    this.carService.deleteCar(id)

    this.cars = this.cars.filter(car => car.id != id)
  }

  detailsCar(id: string) {
    this.router.navigate(['/auth/car-details', id])
  }

}
