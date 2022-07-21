import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion} from 'src/app/model/educacion.model';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})


export class EditarEducacionComponent implements OnInit {

  id!:number;
  educacion: Educacion = new Educacion ("","","","");
  toastr: any;

  constructor(   private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() 
  {
    this.id=this.activatedRoute.snapshot.params['id'];
 this.educacionService.detail(this.id).subscribe(data=>{
  this.educacion=data;
 },err => {
     
  this.router.navigate(['/']);
}
 )
  
  }
  
  onUpdate(): void {   
    this.id=this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(this.id, this.educacion).subscribe(
    data => {
     
      this.router.navigate(['/']);
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
  
}


