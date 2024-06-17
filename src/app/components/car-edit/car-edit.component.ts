import { Location, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-car-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
  ],
  providers: [CarService],
  templateUrl: './car-edit.component.html',
  styleUrl: './car-edit.component.css'
})
export class CarEditComponent implements OnInit {


  car: Car = new Car('', '', '', 0, '')


  editCarForm: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'model': new FormControl('', Validators.required),
    'price': new FormControl(0, [
      Validators.required,
      Validators.min(1)
    ]),
    'image': new FormControl('', Validators.required)
  })


  id: string = this.route.snapshot.params['id']

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.carService.getCar(this.id).subscribe({
      next: (data: Car) => { 
        this.car = data
        this.editCarForm.patchValue({
          'name': this.car.name,
          'model': this.car.model,
          'price': this.car.price,
          'image': this.car.image
        });
       }
    })
  }


  submitEdit() {
    if (this.editCarForm.valid) {
      let {name, model, price, image} = this.editCarForm.value

      const car = new Car(this.id, name, model, price, image)
      this.carService.editCar(this.id, car).subscribe({
        next: () => {
          this.router.navigate(['/auth/maintenance'])
        }
      })
    }
  }


  goBack() {
    this.location.back()
  }

}
