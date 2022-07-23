import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos-service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  
  id!:number;
  proyectos : Proyectos = new Proyectos ("","");
  toastr: any;

  constructor(   private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() 
  {
    this.id=this.activatedRoute.snapshot.params['id'];
 this.proyectosService.detail(this.id).subscribe(data=>{
  this.proyectos=data;
 },err => {
     
  this.router.navigate(['/']);
}
 )
  
  }
  
  onUpdate(): void {   
    this.id=this.activatedRoute.snapshot.params['id'];
    this.proyectosService.update(this.id, this.proyectos).subscribe(
    data => {
     
      this.router.navigate(['/']);
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
  
}




