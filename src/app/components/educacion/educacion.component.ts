import { Component, OnInit } from '@angular/core';
import { Educacion} from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { AuthService  } from 'src/app/service/auth.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  isLogged= false;
  isLoginFail=false;
  roles:string[]=[];
  educacionlista:Educacion [] = [];
     constructor(    private tokenService:TokenService,private authService:AuthService,private educacionService:EducacionService ,private router:Router
    ) { }
   
  ngOnInit() {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
       }
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {this.educacionlista = data;},
      err => { console.log(err);
      });
  }

  Agregar()
  {this.router.navigate(['/agregar-educacion'])}
      }
  






