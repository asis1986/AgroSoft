import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
public title:string;
  constructor() {
    this.title ="Inicia Sesión";
   }

  ngOnInit() { 
    console.log('Componente de Signin Cargado')
  }

}