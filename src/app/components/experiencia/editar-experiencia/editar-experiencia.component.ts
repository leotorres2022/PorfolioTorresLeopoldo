import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  id!:number;
  experiencia : Experiencia = new Experiencia ("","");
  toastr: any;

  constructor(   private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() 
  {
    this.id=this.activatedRoute.snapshot.params['id'];
 this.experienciaService.detail(this.id).subscribe(data=>{
  this.experiencia=data;
 },err => {
     
  this.router.navigate(['/']);
}
 )
  
  }
  
  onUpdate(): void {   
    this.id=this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(this.id, this.experiencia).subscribe(
    data => {
     
      this.router.navigate(['/']);
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
  
}



