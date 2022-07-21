import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { AuthService  } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged= false;
  isLoginFail=false;
  experienciaLista:Experiencia [] = [];
  constructor(    private tokenService:TokenService,private authService:AuthService,private router:Router,
    private experienciaService:ExperienciaService
    ) { }
   
  ngOnInit() {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
       }
  }
  AgregarExp()
  {this.router.navigate(['/agregar-experiencia'])}
  
  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {this.experienciaLista = data;},
      err => { console.log(err);
      });
  }
  
    }











  

 





