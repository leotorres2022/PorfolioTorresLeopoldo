import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

 
  empresa!: string;
  actividad!: string;


  constructor(
    private experienciaService: ExperienciaService,

    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {

    
    const experiencia = new Experiencia(this.empresa, this.actividad);
    this.experienciaService.save(experiencia).subscribe(
      data => {
       alert ("Experiencia Agregada");
        this.router.navigate(['/']);
      },
      err => {
        alert ("fallo");
        this.router.navigate(['/']);
      }
    );
  }

}
