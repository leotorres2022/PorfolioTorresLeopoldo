import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos-service';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

  nombre!: string;
  descripcion!: string;


  constructor(
    private proyectosService: ProyectosService,

    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {

    
    const proyectos = new Proyectos(this.nombre, this.descripcion);
    this.proyectosService.save(proyectos).subscribe(
      data => {
       alert ("Proyecto Agregado");
        this.router.navigate(['/']);
      },
      err => {
        alert ("fallo");
        this.router.navigate(['/']);
      }
    );
  }

}