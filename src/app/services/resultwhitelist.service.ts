import { Injectable } from '@angular/core';
import {News} from "../models/news";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {whitelist} from "../models/whitelist";

@Injectable({
  providedIn: 'root'
})
export class ResultwhitelistService {
  private  SERVER_URL = environment.serverurl
  constructor( private http:HttpClient) {}


  getSingleWhitelist(dname: string) {


    return this.http.get<whitelist>(this.SERVER_URL + '/whitelist/search/'+dname);
  }
}
