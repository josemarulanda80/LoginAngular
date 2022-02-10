import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ListapacientesI } from 'src/app/modelos/listapacientes.interface';
import { PacienteI } from '../../modelos/paciente.interface' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:3007/backend/";
  constructor(private http:HttpClient, private router:Router ) {}
  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion= this.url+ "api/token/"
    return this.http.post<ResponseI>(direccion,form)
  }
  getAllPatients(page:number):Observable<ListapacientesI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<ListapacientesI[]>(direccion)
  }
  getSinglePacient(id:string):Observable<PacienteI>{
    let direccion = this.url + "pacientes?id=" +id;
    
    return this.http.get<PacienteI>(direccion);

  }
}
