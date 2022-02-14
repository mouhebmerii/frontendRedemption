import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdService {
  ServerURL = environment.serverurl;
  constructor(private http:HttpClient) { }
  // @ts-ignore
  create(data){
    return this.http.post(`${this.ServerURL}/usr/new`, data);
  }
}
