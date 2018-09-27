import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
public title:string;
public user:User;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Regístrate';
    this.user = new User("","", "", "", "","","","","","");
   }
  
  ngOnInit() { 
    console.log('Componente de Signup Cargado');
  }

}