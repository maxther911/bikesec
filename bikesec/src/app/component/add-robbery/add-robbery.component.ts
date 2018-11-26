import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { google } from '@agm/core/services/google-maps-types';
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

  @ViewChild("mapRef") mapRef: ElementRef;
  constructor() {

  }

  ngOnInit() {
  }

  showMap() {
    console.log(this.mapRef.nativeElement);
    const location = { lat: 28.5355, lng: 77.3910 };
    var options = {
      center: location,
      zoom: 8
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarket(map, location);
  }
  addMarket(pos, map) {
    return new google.maps.Marker({
      position: pos,
      map: map,
    });
  }
}
