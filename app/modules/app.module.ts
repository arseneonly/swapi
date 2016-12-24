import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from '../components/app/app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';



@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    FormsModule
 ],
  declarations: [ 
    AppComponent, 
    NavbarComponent
  ],
  bootstrap: [ 
    AppComponent,
    NavbarComponent 
  ]
})
export class AppModule { }
