import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarAdministradoresEditarComponent } from '../registrar-administradores-editar/registrar-administradores-editar.component';

@Component({
  selector: 'app-registrar-administradores',
  templateUrl: './registrar-administradores.component.html',
  styleUrls: ['./registrar-administradores.component.scss']
})
export class RegistrarAdministradoresComponent implements OnInit {

  displayedColumns: String[] = ['nombre', 'dni', 'correo', 'usuario', 'acciones']

  dataSource = new MatTableDataSource

  datos = [
    {
      nombre: 'Alex Francisco',
      dni: '78912345',
      correo : 'alex@gmail.com',
      usuario: 'alexP'
    },
    {
      nombre: 'Alex Francisco',
      dni: '78912345',
      correo : 'alex@gmail.com',
      usuario: 'alexP'
    },
    {
      nombre: 'Alex Francisco',
      dni: '78912345',
      correo : 'alex@gmail.com',
      usuario: 'alexP'
    },
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource =  new MatTableDataSource<any>(this.datos);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

}
