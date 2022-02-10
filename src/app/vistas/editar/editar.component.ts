import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteI  } from 'src/app/modelos/paciente.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activatedrouter:ActivatedRoute, private router:Router, private api: ApiService) { }
  
  datosPaciente:PacienteI | undefined
  editarFor = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono:new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
  })

  ngOnInit(): void {
    //Obtener el id del paciente//
    let pacienteid:any= this.activatedrouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSinglePacient(pacienteid).subscribe(data=>{
      console.log(data);
    })
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
