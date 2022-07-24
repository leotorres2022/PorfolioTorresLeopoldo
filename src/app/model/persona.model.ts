export class Persona
{id?:number;
nombre:string;
apellido:string;

titulo:string;
informacion:string;

constructor(nombre:string,apellido:string,titulo:string,informacion:string)
{this.nombre = nombre;
 this.apellido = apellido;
 this.titulo = titulo;
 this.informacion = informacion;
}
}