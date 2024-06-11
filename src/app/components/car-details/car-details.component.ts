import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id']
  }

}
