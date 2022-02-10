import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'
import {  Router } from '@angular/router';
import { ListapacientesI } from '../../modelos/listapacientes.interface'
import { HeaderComponent } from 'src/app/plantillas/header/header.component';
import { FooterComponent } from 'src/app/plantillas/footer/footer.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }
  pacientes:ListapacientesI[]=[];
  ngOnInit(): void {
    this.api.getAllPatients(1).subscribe(data =>{
      this.pacientes =data
      console.log(data)
    })
  }
  editarPaciente(id:string){
    this.router.navigate(['editar',id])
    console.log(id);
  }
  nuevoPaciente(){
    this.router.navigate(['nuevo']);
  }

}
