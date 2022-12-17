import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdministradoresService } from '../../services/administradores.service';
import { RegistrarAdministradoresEditarComponent } from '../registrar-administradores-editar/registrar-administradores-editar.component';

@Component({
  selector: 'app-registrar-administradores',
  templateUrl: './registrar-administradores.component.html',
  styleUrls: ['./registrar-administradores.component.scss']
})
export class RegistrarAdministradoresComponent implements OnInit {

  displayedColumns: String[] = ['nombre', 'dni', 'correo', 'usuario', 'acciones']

  administradores = new MatTableDataSource

  constructor(
    public dialog: MatDialog,
    public administradoresService: AdministradoresService
  ) { }

  ngOnInit(): void {
    this.obtenerUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.administradores.filter = filterValue.trim().toLowerCase();
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(RegistrarAdministradoresEditarComponent, {
      data: {element},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  obtenerUsers(){
   this.administradoresService.obtenerUsers().subscribe((res:any)=>{
    console.log(res);
    this.administradores = new MatTableDataSource<any>(res)
   });; 
  }

}
