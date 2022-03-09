import {Component} from '@angular/core';
import { Advertise } from '../../entities/advertise.entity';

@Component({
    selector: 'adv-table',
    templateUrl: 'advertise-table.component.html'
})
export class AdvertiseTableComponent {
    advertises:Array<Advertise> = [];

}