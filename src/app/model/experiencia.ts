export class Experiencia {

   id!: number;
   empresa: string;
   actividad: string;
  
   constructor(empresa: string, actividad: string) {
       this.empresa = empresa;
       this.actividad = actividad;
     
      
   }
}