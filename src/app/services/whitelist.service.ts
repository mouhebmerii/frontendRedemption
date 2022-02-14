import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {News} from "../models/news";
import {Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {
ServerURL = environment.serverurl
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private  http:HttpClient) { }

  getAllApps(NumberOfResults=50) {
    return this.http.get(this.ServerURL +'/whitelist', {
      params: {
        limit: NumberOfResults.toString()
      }
    });

  }
  getSingleApp(id: number) {
    return this.http.get<News>(this.ServerURL + '/whitelist/' + id);
  }


  updateAppAccepted(id:number): Observable<any> {
    return this.http.patch<{ message?: string, status: string }>(this.ServerURL +'/whitelist/'+id,"accepted")
      .pipe();
  }



  updateUser(id:any, data:any): Observable<any> {
    let API_URL = `${this.ServerURL}/whitelist/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeaders })
      .pipe()
  }


  accepted(id:number){
    return this.http.post(`${this.ServerURL}/whitelist/updatea/`+id,'');
  }

  refused(id:number){
    return this.http.post(`${this.ServerURL}/whitelist/updater/`+id,'');
  }

  // @ts-ignore
  create(data){
    return this.http.post(`${this.ServerURL}/whitelist/new`, data);
  }
  deleteWhitelist(id:number): Observable<any> {
    return this.http.delete<{ message?: string, status: string }>(this.ServerURL +'/whitelist/delete/'+id)
      .pipe(
        switchMap(async (data) => {
          const prods = await this.getAllApps().toPromise();
          return {
            ...data,
            ...prods
          };
        })
      );
  }
}
