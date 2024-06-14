import { Location, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css'
})
export class CarAddComponent {

  constructor(private location: Location,
    private carService: CarService,
    private router: Router
  ) {}

  addCarForm: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'model': new FormControl('', Validators.required),
    'price': new FormControl(0, [
      Validators.required,
      Validators.min(1)
    ]),
    'image': new FormControl('', Validators.required),
  })

  addCar() {
    if (this.addCarForm.valid) {
      let {name, model, price, image} = this.addCarForm.value
      const car = new Car(`${Date.now()}`, name, model, price, image)

      this.carService.addCar(car)

      this.router.navigate(['/auth/maintenance'])
    }
  }

  goBack() {
    this.location.back()
  }

}
