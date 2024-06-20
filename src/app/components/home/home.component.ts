import { Component, Input, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CurrencyPipe, NgFor } from '@angular/common';
import { CarService } from '../../services/car.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { Car } from '../../models/car';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
    SearchBoxComponent,
    HttpClientModule,
    NgFor,
    SearchPipe,
    CurrencyPipe,
  ],
  providers: [CarService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @Input() searchStr: string = ""

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

  searchChanged(str: string) {
    this.searchStr = str
  }

  addToFavorites(car: Car) {
    // this.carService.postCarToFavorites(car).subscribe((data) => console.log(data))
    this.carService.postCarToFavorites(car).subscribe({
      next: () => {
        this.router.navigate(['/auth/favorites'])
      }
    })
    
  }

}
