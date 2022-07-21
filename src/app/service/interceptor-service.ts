import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";



export class InterceptorService {
    
    constructor(private tokenService:TokenService){}
    intercept( req: HttpRequest<any>,  next:HttpHandler):Observable<HttpEvent<any>>{
        let intreq=req;
        const token = this.tokenService.getToken();
        if(token != null){

      intreq= req.clone({headers:req.headers.set('Authorizacion','Bearer'+token)});
        }
        return next.handle(intreq);
    }
}
export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    UseClass:InterceptorService,
    multi:true

}];
