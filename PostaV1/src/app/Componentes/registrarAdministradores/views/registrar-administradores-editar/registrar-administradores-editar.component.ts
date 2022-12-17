import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar-administradores-editar',
  templateUrl: './registrar-administradores-editar.component.html',
  styleUrls: ['./registrar-administradores-editar.component.scss']
})
export class RegistrarAdministradoresEditarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegistrarAdministradoresEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  usuario: any

  ngOnInit(): void {
    this.usuario = this.data.element 
  }

}
