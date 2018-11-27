import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikesService } from '../../service/bikes.service';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bikes',
  templateUrl: './list-bikes.component.html',
  styleUrls: ['./list-bikes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListBikesComponent implements OnInit {
  private title : string;
  bikes: Bike[];
  bikesUsers: Bike[];
  editState: boolean = false;
  bikeToEdit: Bike;

  constructor(public bikeService: BikesService, private login: LoginService, private route : Router) { }

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.bikeService.getBikes().subscribe(bikes => {
        this.bikes = bikes;
      });
    } else {
      this.getBike();
    }
    
    if(this.route.url === '/list-bikes'){
      this.title = "Mis Bicicletas"
    }else{
      this.title = "Bicicletas Hurtadas"
    }
  }

  deleteBike(event, bike) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
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

  getBike() {
    this.bikeService.getBikesByUID().subscribe(
      bikes => {
        this.bikesUsers = bikes;
      });
  }
}