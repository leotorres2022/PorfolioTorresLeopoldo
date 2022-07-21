import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hard } from "../model/hard";

@Injectable({
    providedIn: 'root'
  })

export class HardService { url = 'http://localhost:8080/hard/'

constructor(private http: HttpClient) { }

public detail(id: number): Observable<Hard> {
  return this.http.get<Hard>(this.url + `detail/${id}`);
}

public lista(): Observable<Hard[]> {
  return this.http.get<Hard[]>(this.url + 'lista');
}

public save(hard: Hard): Observable<object> {
  return this.http.post<any>(this.url + 'create', hard);
}

public update(id: number, hard: Hard): Observable<any> {
  return this.http.put<any>(this.url+ `update/${id}`, hard);
}

public delete(id: number): Observable<any> {
  return this.http.delete<any>(this.url + `delete/${id}`);
}
}

