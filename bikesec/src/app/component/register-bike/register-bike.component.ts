import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bike } from '../../models/bike';
import { BikesService } from 'src/app/service/bikes.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
encapsulation: ViewEncapsulation.None
declare var $: any;


@Component({
  selector: 'app-register-bike',
  templateUrl: './register-bike.component.html',
  styleUrls: ['./register-bike.component.css']
})
export class RegisterBikeComponent implements OnInit {
  bike: Bike = {
    uid: '',
    nickName: '',
    id: '',
    marca: '',
    modelo: '',
    serial: '',
    color: '',
    rin: '',
    tipo: '',
    talla: '',
    description: '',
    registerDate: new Date(),
    image: ''
  };

  constructor(private bikeService: BikesService, private route: Router, private login: LoginService) {
    $(document).ready(function () {
      $('#fechaCompra').datepicker({
        format: 'dd/mm/yyyy',
        setDefaultDate: true,
        defaultDate: new Date(2018, 1, 1),
        maxDate: new Date()
      });
      $('select').formSelect();
    });
  }

  ngOnInit() {
  }

  addBike() {
    console.log(console.info, this.login.getUserDetails.uid);

    if (this.bike.marca != '' && this.bike.description != '') {
      this.bike.nickName = this.login.getUserDetails.email.split('@')[0];
      console.log('Usuario: ' + this.bike.nickName);
      this.bike.uid = this.login.getUserDetails.uid;
      console.log(this.bike.registerDate);
      this.bikeService.addBike(this.bike);
      this.bike.id;
      this.bike.color;
      this.bike.description;
      this.bike.image;
      this.bike.marca;
      this.bike.modelo;
      this.bike.registerDate;
      this.bike.incidentDate;
      this.bike.rin;
      this.bike.serial;
    }
  }
}
