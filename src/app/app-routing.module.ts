import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

const routes: Routes = [
  { path:'login' , component:LoginComponent },
  { path:'nuevo' , component:NuevoComponent},
  { path:'editar/:id' , component:EditarComponent},
  { path:'dashboard' , component:DashboardComponent},
  { path:'**' , redirectTo:'login' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]
