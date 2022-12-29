import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
//HEY
export class BaseService {

  private Url = 'https://rickandmortyapi.com/api/location?page=';

  getDireccion(){
    return this.Url;

  }


}
