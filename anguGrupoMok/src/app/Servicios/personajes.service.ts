import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { personajes } from '../Clases/personajes';

@Injectable({providedIn: 'root'})
export class PersonajesService {

  constructor(private http: HttpClient,private base:BaseService) {

  }

  GetPersonajes() {


    return this.http.get<personajes>(this.base.getDireccion() + '1' );

  }

}


