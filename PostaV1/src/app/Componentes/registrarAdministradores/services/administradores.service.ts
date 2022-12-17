import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8000/api"

  obtenerUsers() {
    return this.httpClient.get(this.url+'/users/');
  }

}
