import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hard } from 'src/app/model/hard';
import { HardService } from 'src/app/service/hard-service';

@Component({
  selector: 'app-editar-hard',
  templateUrl: './editar-hard.component.html',
  styleUrls: ['./editar-hard.component.css']
})
export class EditarHardComponent implements OnInit {

 
  id!:number;
  hard : Hard = new Hard ("",0,"");
  toastr: any;

  constructor(   private hardService: HardService,
    private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() 
  {
    this.id=this.activatedRoute.snapshot.params['id'];
 this.hardService.detail(this.id).subscribe(data=>{
  this.hard=data;
 },err => {
     
  this.router.navigate(['/']);
}
 )
  
  }
  
  onUpdate(): void {   
    this.id=this.activatedRoute.snapshot.params['id'];
    this.hardService.update(this.id, this.hard).subscribe(
    data => {
     
      this.router.navigate(['/']);
    },
    err => {
     
      this.router.navigate(['/']);
    }
  );
}
  
}



