import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';  
import { Especialidades } from 'src/app/Helpers/Interfaces/especialidades.interface';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarCitasService } from '../../services/registrar-citas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/Componentes/snack-bar/snack-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.scss']
})
export class RegistrarCitaComponent implements OnInit {

  constructor(
    private registrarCitasService: RegistrarCitasService,
    public snackBar: MatSnackBar,
    public router : Router
  ) { }

  //FECHA
  selected
  //ESPECIALIDADES
  especialidades: Especialidades[] = [
    {
      nombre:'psicologo'
    },
    {
      nombre:'traumatologia'
    },
    {
      nombre:'pediatria'
    }
  ]

  datos = [
    {
      hora: '8:00 - 8:30',
      estado: 'disponible'
    },
    {
      hora: '8:30 - 9:00',
      estado: 'Reservado'
    },
    {
      hora: '9:00 - 9:30',
      estado: 'Reservado'
    },
  ]


  dataSource = new MatTableDataSource
  displayedColumns: String[] = ['hora', 'estado', 'acciones']
    
  enableHorarios: boolean = true;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.datos);
  }

  seleccionarFecha(selected){
   //console.log(selected.toISOString());
   let fecha : string = selected.toLocaleDateString('en-us', { year:"numeric"}) + "-" + selected.toLocaleDateString('en-us', { month:"numeric"}) + "-0" + selected.toLocaleDateString('en-us', { day:"numeric"})
   console.log("Fecha:", fecha);
   
   this.enableHorarios = false;
   this.ShowSnackBar(`Fecha: ${fecha}`);
   let especialidad_id = 1
   let parametro = {
    fecha : selected,
    especialidad_id: 1
   }

   this.registrarCitasService.obtenerUsers(fecha,especialidad_id ).subscribe((res)=>{
    console.log(res);
   });;

   this.registrarCitasService.obtenerEspecialidades().subscribe((res)=>{
    console.log(res);
   });;
   
   this.registrarCitasService.obtenerListaCitas(fecha,especialidad_id ).subscribe((res)=>{
    console.log(res);
   });;
  }

  seleccionaHorarios(hora){
    console.log("test");  
    this.ShowSnackBar(`Hora seleccionada: ${hora}`); 
    this.volverMenu();
  }


  ShowSnackBar(msn){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2500,
      data: {
        mensaje: msn,
        tipo: 99,
      },
    });
  }
  
  volverMenu(){
    this.router.navigate(['menu']);
  }

}
