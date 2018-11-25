import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikesService } from '../../service/bikes.service';

@Component({
  selector: 'app-list-bikes',
  templateUrl: './list-bikes.component.html',
  styleUrls: ['./list-bikes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListBikesComponent implements OnInit {
  bikes: Bike[];
  editState: boolean = false;
  bikeToEdit: Bike;

  constructor(public bikeService: BikesService) { }

  ngOnInit() {
    this.bikeService.getBikes().subscribe(bikes => {
      //console.log(bikes);
      this.bikes = bikes;
    });
  }

  deleteBike(event, bike) {
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.bikeService.deleteBike(bike);
    }
    return;
  }

  editBike(event, bike) {
    this.editState = !this.editState;
    this.bikeToEdit = bike;
  }

  updateBike(bike) {
    this.bikeService.updateBike(bike);
    this.bikeToEdit = null;
    this.editState = false;
  }

}
