import { HttpClientModule } from '@angular/common/http';
//tarea importada del servicio de la api
import {TareaService} from './services/tarea.service'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
