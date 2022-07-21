import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia-service';

@Component({
  selector: 'app-eliminar-experiencia',
  templateUrl: './eliminar-experiencia.component.html',
  styleUrls: ['./eliminar-experiencia.component.css']
})
export class EliminarExperienciaComponent implements OnInit {

deleteid!: number;

constructor( private experienciaService: ExperienciaService,
  private activatedRoute: ActivatedRoute,
    private router: Router) { }

ngOnInit(): void
{this.deleteid=this.activatedRoute.snapshot.params['id'];
console.log(this.deleteid);
}

borrar():void{
this.experienciaService.delete(this.deleteid).subscribe(
  data => {   this.router.navigate(['/']);
   
  },
  err => {
   
    this.router.navigate(['/']);
  }
);
}

}
