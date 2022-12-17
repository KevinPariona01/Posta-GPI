import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dataLogin = {
    c_username: "",
    c_clave: ""
  };

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login(e:any) {

    console.log(this.dataLogin);   

    let parametros = {
      usuario: this.dataLogin.c_username,
      clave: this.dataLogin.c_clave
    }
    localStorage.setItem('usuario', parametros.usuario);
    this._router.navigate(['menu']);
  }

}
