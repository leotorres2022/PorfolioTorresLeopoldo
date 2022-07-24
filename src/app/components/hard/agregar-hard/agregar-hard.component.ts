import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hard } from 'src/app/model/hard';
import { HardService } from 'src/app/service/hard-service';

@Component({
  selector: 'app-agregar-hard',
  templateUrl: './agregar-hard.component.html',
  styleUrls: ['./agregar-hard.component.css']
})
export class AgregarHardComponent implements OnInit {

  nombre!: string;
  porcentaje!: number;
  img!:string;


  constructor(
    private hardService: HardService,

    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {

    
    const hard = new Hard(this.nombre, this.porcentaje,this.img);
    this.hardService.save(hard).subscribe(
      data => {
       alert ("Hard Agregada");
        this.router.navigate(['/']);
      },
      err => {
        alert ("fallo");
        this.router.navigate(['/']);
      }
    );
  }

}
