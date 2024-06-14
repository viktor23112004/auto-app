import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
    HttpClientModule
  ],
  providers: [CarService],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent implements OnInit{

  cars: Car[] = []

  constructor (private carService: CarService, 
    private router: Router
  ) {}

  getCarsList() {
    this.carService.getCars().subscribe({
      next: (data: Car[]) => {
        this.cars = data
      }
    })
  }

  ngOnInit(): void {
    this.getCarsList()
  }

  createCar() {
    this.router.navigate(['/auth/car-add'])
  }

  editCar(id: string) {

  }

  deleteCar(id: string) {
    this.carService.deleteCar(id).subscribe({
      next: () => {
        this.getCarsList()
        // this.cars = this.cars.filter(car => car.id != id)
      }
    })
  }

  detailsCar(id: string) {
    this.router.navigate(['/auth/car-details', id])
  }

}
