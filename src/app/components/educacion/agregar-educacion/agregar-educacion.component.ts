import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion} from 'src/app/model/educacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  centro!: string;
  titulo!: string;
  anio_ingreso!: string;
  anio_egreso!: string;

  constructor(
    private educacionService: EducacionService,

    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {

    
    const educacion = new Educacion(this.centro, this.titulo,this.anio_ingreso, this.anio_egreso);
    this.educacionService.save(educacion).subscribe(
      data => {
       alert ("Educaccion Agregada");
        this.router.navigate(['/']);
      },
      err => {
        alert ("fallo");
        this.router.navigate(['/']);
      }
    );
  }

}
