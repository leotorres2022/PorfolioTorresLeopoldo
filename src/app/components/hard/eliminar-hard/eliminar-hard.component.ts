import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardService } from 'src/app/service/hard-service';

@Component({
  selector: 'app-eliminar-hard',
  templateUrl: './eliminar-hard.component.html',
  styleUrls: ['./eliminar-hard.component.css']
})
export class EliminarHardComponent implements OnInit {

  deleteid!: number;

  constructor( private hardService: HardService,
    private activatedRoute: ActivatedRoute,
      private router: Router) { }
  
  ngOnInit(): void
  {this.deleteid=this.activatedRoute.snapshot.params['id'];
  console.log(this.deleteid);
  }
  
  borrarHard():void{
  this.hardService.delete(this.deleteid).subscribe(
    data => {   this.router.navigate(['/']);
     
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
  }
  
  }
  