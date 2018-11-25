import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bike } from '../../models/bike';
import { Task } from '../../models/task';
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

  constructor() {
    $(document).ready(function () {
      $('.datepicker').datepicker();
    });
  }

  ngOnInit() {
  }

}
