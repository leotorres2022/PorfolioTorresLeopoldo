import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectosService } from 'src/app/service/proyectos-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged= false;
  isLoginFail=false;
  proyectosLista:Proyectos [] = [];
  
  constructor(    private tokenService:TokenService,private authService:AuthService,private router:Router,
    private proyectosService:ProyectosService
    ) { }
   
  ngOnInit() {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
       }
  }
  AgregarProy()
  {this.router.navigate(['/agregar-proyectos'])}
  
  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => {this.proyectosLista = data;},
      err => { console.log(err);
      });
  }
  
    }
