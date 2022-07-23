import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos-service';

@Component({
  selector: 'app-eliminar-proyectos',
  templateUrl: './eliminar-proyectos.component.html',
  styleUrls: ['./eliminar-proyectos.component.css']
})
export class EliminarProyectosComponent implements OnInit {

  deleteid!: number;

  constructor( private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
      private router: Router) { }
  
  ngOnInit(): void
  {this.deleteid=this.activatedRoute.snapshot.params['id'];
  console.log(this.deleteid);
  }
  
  borrarProy():void{
  this.proyectosService.delete(this.deleteid).subscribe(
    data => {   this.router.navigate(['/']);
     
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
  }
  
  }
  