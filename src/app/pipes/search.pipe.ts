import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(cars: Car[], name: string): Car[] {
    return cars.filter(car => car.name.toLocaleLowerCase().includes(name))
  }

}
