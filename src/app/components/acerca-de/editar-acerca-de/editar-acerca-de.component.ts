import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  id!:number;
  persona: Persona = new Persona ("","","","");
  

  constructor(   private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() 
  {
    this.id=this.activatedRoute.snapshot.params['id'];
 this.personaService.detail(this.id).subscribe(data=>{
  this.persona=data;
 },err => {
     
  this.router.navigate(['/']);
}
 )
  
  }
  
  onUpdate(): void {   
    this.id=this.activatedRoute.snapshot.params['id'];
    this.personaService.update(this.id, this.persona).subscribe(
    data => {
     
      this.router.navigate(['/']);
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
  
}



  
  
  