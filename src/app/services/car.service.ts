import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [
    new Car("1", "Toyota Camry", "2022", 30000, "https://upload.wikimedia.org/wikipedia/commons/f/fd/2025_Toyota_Camry_Hybrid_XSE_%28United_States%29_front_view.png"),
    new Car("2", "Honda Accord", "2022", 32000, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/280px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg"),
    new Car("3", "Ford Mustang", "2022", 45000, "https://upload.wikimedia.org/wikipedia/commons/3/34/2024_Ford_Mustang_Dark_Horse.jpg"),
    new Car("4", "Chevrolet Silverado", "2022", 40000, "https://upload.wikimedia.org/wikipedia/commons/2/26/2022_Chevrolet_Silverado_K1500_LT-L%2C_front_4.24.23.jpg"),
    new Car("5", "BMW 3 Series", "2022", 50000, "https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg"),
    new Car("6", "Audi A4", "2022", 48000, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Audi_A4_B9_sedans_%28FL%29_1X7A2441.jpg/1200px-Audi_A4_B9_sedans_%28FL%29_1X7A2441.jpg"),
    new Car("7", "Mercedes-Benz C-Class", "2022", 55000, "https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg"),
    new Car("8", "Tesla Model 3", "2022", 60000, "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg")
  ]

  getCar(id: string): Car | undefined {
    return this.cars.find(car => car.id == id)
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter(car => car.id != id)
  }

  
}
