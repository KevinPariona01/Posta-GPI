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
  especialidades: any  = []
  idEspecialidad: number = 0


  citas = new MatTableDataSource
  displayedColumns: String[] = ['fecha', 'horaInicio', 'horaFin', 'estado', 'acciones']
    
  enableHorarios: boolean = true;

  ngOnInit(): void {
    this.obtenerEspecialidades();
  }

  seleccionarFecha(selected){
    if(this.idEspecialidad == 0){
      this.ShowSnackBar(`Seleccione una especialidad`); 
    }else{
      let fecha : string = selected.toLocaleDateString('en-us', { year:"numeric"}) + "-" + selected.toLocaleDateString('en-us', { month:"numeric"}) + "-0" + selected.toLocaleDateString('en-us', { day:"numeric"})
      console.log("Fecha:", fecha);
      this.registrarCitasService.obtenerListaCitas(fecha,this.idEspecialidad ).subscribe((res:any)=>{
       if(res.length!=0){
       this.citas = new MatTableDataSource<any>(res);
       this.enableHorarios = false;
       }else{
         this.ShowSnackBar(`No hay citas registradas`); 
         this.enableHorarios = true;
       }
      });;
    }
   
  }

  obtenerEspecialidades(){
    this.registrarCitasService.obtenerEspecialidades().subscribe((res:any)=>{
        this.especialidades = res;
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
