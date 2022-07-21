
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  url = 'http://localhost:8080/experiencia/'

  constructor(private http: HttpClient) { }

  public detail(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.url + `detail/${id}`);
  }

  public lista(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + 'lista');
  }

  public save(experiencia: Experiencia): Observable<object> {
    return this.http.post<any>(this.url + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.url+ `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}

  

