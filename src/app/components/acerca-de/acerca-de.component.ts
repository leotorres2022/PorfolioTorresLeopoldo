import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged= false;
  isLoginFail=false;
 persona:Persona [] = [];
 
constructor(public personaService:PersonaService,  private tokenService:TokenService,
  private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
       }
  }

  cargarPersona(): void {
    this.personaService.lista().subscribe(data => {this.persona = data;},
      err => { console.log(err);
      });
  }
}
