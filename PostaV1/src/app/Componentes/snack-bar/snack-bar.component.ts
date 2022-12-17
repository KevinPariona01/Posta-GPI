import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackInterface } from 'src/app/Helpers/Interfaces/snackbar.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  mensaje:String;
  tipo: number;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackInterface) { }

  ngOnInit(): void {
    this.mensaje = this.data.mensaje;
    this.tipo= this.data.tipo;
  }

}
