import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Bike } from 'src/app/models/bike';
declare var $: any;

@Component({
  selector: 'app-add-robbery',
  templateUrl: './add-robbery.component.html',
  styleUrls: ['./add-robbery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddRobberyComponent implements OnInit {
  private lat: number = 4.643548;
  private lng: number = -74.1621109;
  private zoom: number = 20;
  private map: any;

  bike: Bike = {
    id: '',
    marca: '',
    modelo: '',
    serial: '',
    color: '',
    rin: '',
    tipo: '',
    talla: '',
    description: ''
  };

  constructor() {

  }

  ngOnInit() {
  }

  getCoords(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(event);
  }
}
