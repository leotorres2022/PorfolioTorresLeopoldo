import { Component, OnInit } from '@angular/core';
import { Hard } from 'src/app/model/hard';
import { HardService } from 'src/app/service/hard-service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit { isLogged= false;
  isLoginFail=false;
  hardLista:Hard [] = [];
  constructor(    private tokenService:TokenService,private hardService:HardService
    ) { }
   
  ngOnInit() {
    this.cargarHard();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
       }
  }
 
  
  cargarHard(): void {
    this.hardService.lista().subscribe(data => {this.hardLista = data;},
      err => { console.log(err);
      });
  }
  
    }





