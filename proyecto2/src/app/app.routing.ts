import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importar Componentes
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';

//Definir Sistema de rutas
 const appRoutes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: SignupComponent }
];
// Exportar Sistema de rutas para que ouedan ser utilizadas en otros archivos
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);