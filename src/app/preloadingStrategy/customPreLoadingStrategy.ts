import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class CustomPreLoadingStrategy implements PreloadingStrategy{
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        
        if(route.data?.["preload"]){
            return fn();
        }else{
            return EMPTY    // Empty is an observable that emits nothing and 
        }                   // immediately completes
    }
}