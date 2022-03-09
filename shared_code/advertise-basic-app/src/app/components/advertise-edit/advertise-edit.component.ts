import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {Advertise} from '../../entities/advertise.entity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'advertise-edit',
    templateUrl: './advertise-edit.component.html'
})
export class EditAdvertiseComponent {

    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];
    advertise:Advertise = new Advertise();


}