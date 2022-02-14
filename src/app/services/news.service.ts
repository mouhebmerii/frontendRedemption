import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {News} from "../models/news";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private  SERVER_URL = environment.serverurl
  constructor(private http:HttpClient) { }

  getAllnews(NumberOfResults=100) {
    return this.http.get(this.SERVER_URL+'/news', {
      params: {
        limit: NumberOfResults.toString()
      }
    });

  }

  getSingleNews(id: number) {
    return this.http.get<News>(this.SERVER_URL + '/news/' + id);
  }


  deletePost(newsid:number){
    this.http.delete(this.SERVER_URL+'/news/delete/'+newsid)
      .subscribe();
  }
  deleteProduct(id:number): Observable<any> {
    return this.http.delete<{ message?: string, status: string }>(this.SERVER_URL+'/news/delete/'+id)
      .pipe(
        switchMap(async (data) => {
          const prods = await this.getAllnews().toPromise();
          return {
            ...data,
            ...prods
          };
        })
      );
  }


}
