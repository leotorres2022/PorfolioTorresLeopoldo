import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  url = 'http://localhost:8080/educacion/'

  constructor(private http: HttpClient) { }

  public detail(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Educacion> {
    return this.http.get<Educacion>(this.url + `detailname/${nombre}`);
  }
  public lista(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + 'lista');
  }

  public save(educacion: Educacion): Observable<object> {
    return this.http.post<any>(this.url + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url+ `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}

  

