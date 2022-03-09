import {Component} from '@angular/core';
import {Advertise} from '../../entities/advertise.entity';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
  })
export class HomeComponent {
    advertises:Array<Advertise> = [];

 
}