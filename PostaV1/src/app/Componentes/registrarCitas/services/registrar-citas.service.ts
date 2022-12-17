import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarCitasService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8000/api"

  obtenerUsers(fecha, especialidad_id) {
    return this.httpClient.get(this.url+'/users/');
  }

  obtenerEspecialidades() {
    return this.httpClient.get(this.url+'/especialidades/');
  }

  obtenerListaCitas(fecha, especialidad_id) {
    console.log(this.url+`/citas?${fecha}&${especialidad_id}`);
    return this.httpClient.get(this.url+`/citas?fecha=${fecha}&especialidad_id=${especialidad_id}`);
  }


}
