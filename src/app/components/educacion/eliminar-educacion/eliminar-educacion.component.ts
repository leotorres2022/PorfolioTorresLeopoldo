import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion} from 'src/app/model/educacion.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-educacion',
  templateUrl: './eliminar-educacion.component.html',
  styleUrls: ['./eliminar-educacion.component.css']
})
export class EliminarEducacionComponent implements OnInit {
  deleteid!: number;

  constructor( private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void
  {this.deleteid=this.activatedRoute.snapshot.params['id'];
  console.log(this.deleteid);
  }

  borrar():void{
  this.educacionService.delete(this.deleteid).subscribe(
    data => {   this.router.navigate(['/']);
     
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
}
