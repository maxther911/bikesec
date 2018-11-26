import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bike } from '../../models/bike';
import { BikesService } from 'src/app/service/bikes.service';
encapsulation: ViewEncapsulation.None
declare var $: any;


@Component({
  selector: 'app-register-bike',
  templateUrl: './register-bike.component.html',
  styleUrls: ['./register-bike.component.css']
})
export class RegisterBikeComponent implements OnInit {
   bike: Bike = {
    id : '',
    marca : '',
    modelo : '',
    serial : '',
    color : '',
    rin : '',
    tipo : '',
    talla : '',
    description : ''
   };

  constructor(private bikeService : BikesService) {
    $(document).ready(function () {
      $('.datepicker').datepicker();
      $('select').formSelect();
    });
  }

  ngOnInit() {
  }

  addBike() {
    if(this.bike.marca != '' && this.bike.description != '') {
      console.log("Bike: " + this.bike)
      this.bikeService.addBike(this.bike);
      this.bike.id ;
      this.bike.color ;
      this.bike.description ;
      this.bike.image ;
      this.bike.marca ;
      this.bike.modelo ;
      this.bike.registerDate;
      this.bike.incidentDate;
      this.bike.rin;
      this.bike.serial;
    }
  }
}
