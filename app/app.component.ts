import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { SwapiService } from '../node_modules/ng2-swapi';
import { Endpoint } from './endpoint';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
<h3>Request</h3>
<form>
     <div class="form-group">
      <label for="resources">Resources</label>
      <select class="form-control" required [(ngModel)]="url.resource" name="resources">
          <option *ngFor="let r of resources" [value]="r">{{r}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="index">Index</label>
      <input type="number" [(ngModel)]="url.index" name="quantity" min="0" required>
    </div>

    <div class="form-group">
      <input type="checkbox" name="wookie" [(ngModel)]="url.wookiee" /> Wookiee
    </div>

    <button type="submit" class="btn btn-default" (click)="onSubmit()">Submit</button>

  </form>

<h3>Response:</h3>
<pre>{{ res | json}}</pre>
<div style="color:red">{{ errorMessage }}</div>
  `,
  providers: [ SwapiService ]
})
export class AppComponent  { 
  errorMessage: string;
  res: {};
  root: {};
  resources = [
    'root',
    'people',
    'films',
    'starships',
    'vehicles',
    'species',
    'planets',
    'person',
    'film',
    'starship',
    'vehicle',
    'specie',
    'planet',
    'person schema',
    'film schema',
    'starship schema',
    'vehicle shcema',
    'specie schema',
    'planet schema'
  ];
  url = new Endpoint();

  constructor (private swapi: SwapiService) {
  }

getDetails(req: Endpoint) {

    switch(req.resource){
      case this.resources[0]:
        this.swapi.getRoot(req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[1]:
        this.swapi.getPeople(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[2]:
        this.swapi.getFilms(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[3]:
        this.swapi.getStarships(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[4]:
        this.swapi.getVehicles(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[5]:
        this.swapi.getSpecies(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[6]:
        this.swapi.getPlanets(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[7]:
        this.swapi.getPerson(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[8]:
        this.swapi.getFilm(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[9]:
        this.swapi.getStarship(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[10]:
        this.swapi.getVehicle(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[11]:
        this.swapi.getSpecie(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[12]:
        this.swapi.getPlanet(req.index, req.wookiee)
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[13]:
        this.swapi.getPersonSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[14]:
        this.swapi.getFilmSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[15]:
        this.swapi.getStarshipSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[16]:
        this.swapi.getVehicleSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[17]:
        this.swapi.getSpecieSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      case this.resources[18]:
        this.swapi.getPlanetSchema()
        .subscribe(
          res =>  {this.res = res; this.errorMessage = ''},
          err =>  {this.res = {};  this.errorMessage = <any>err});
        break;
      default:
        break;
    }

}


    onSubmit() {
      console.log(this.url);
      this.getDetails(this.url);
      //this.resetForm();
    }

    resetForm(){
      this.url = new Endpoint();
    }


}
