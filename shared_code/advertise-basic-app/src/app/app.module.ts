import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {EditAdvertiseComponent} from './components/advertise-edit/advertise-edit.component';
import { AdvertiseTableComponent } from './components/advertise-table/advertise-table.component';
import {AdvertiseFormComponent} from './components/advertise-form/advertise-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, EditAdvertiseComponent, AdvertiseTableComponent,
    AdvertiseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
