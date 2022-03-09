import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {Advertise} from '../../entities/advertise.entity';

@Component({
    selector: 'advertise-form',
    templateUrl: './advertise-form.component.html'
})
export class AdvertiseFormComponent{

    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];

}