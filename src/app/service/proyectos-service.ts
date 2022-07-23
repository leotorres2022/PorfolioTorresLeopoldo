import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proyectos } from "../model/proyectos";


@Injectable({
    providedIn: 'root'
  })
  export class ProyectosService {
    
    url = 'http://localhost:8080/proyectos/'
  
    constructor(private http: HttpClient) { }
  
    public detail(id: number): Observable<Proyectos> {
      return this.http.get<Proyectos>(this.url + `detail/${id}`);
    }
  
    public lista(): Observable<Proyectos[]> {
      return this.http.get<Proyectos[]>(this.url + 'lista');
    }
  
    public save(proyectos: Proyectos): Observable<object> {
      return this.http.post<any>(this.url + 'create', proyectos);
    }
  
    public update(id: number, proyectos: Proyectos): Observable<any> {
      return this.http.put<any>(this.url+ `update/${id}`, proyectos);
    }
  
    public delete(id: number): Observable<any> {
      return this.http.delete<any>(this.url + `delete/${id}`);
    }
  }
  
    
  