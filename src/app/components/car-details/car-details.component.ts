import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit{

  car: Car | undefined = new Car('', '', '', 0, '')

  constructor(private route: ActivatedRoute, 
    private carService: CarService, 
    private location: Location
  ) {}


  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id']

    this.car = this.carService.getCar(id)
  }

  goBack() {
    this.location.back()
  }

  

}
