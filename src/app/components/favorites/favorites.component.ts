import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { Subscription } from 'rxjs';
import { CarService } from '../../services/car.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    NgFor,    
    HttpClientModule
  ],
  providers: [CarService],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit, OnDestroy {  

  favorites: Car[] = []
  favoritesSubscription: Subscription = new Subscription();

  constructor(
    private CarService: CarService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.favoritesSubscription = this.CarService.getCarsFromFavorites().subscribe((data: Car[]) => {
      this.favorites = data
    })
  }

  ngOnDestroy() {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe()
    }
  }

}
