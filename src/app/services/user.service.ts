import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService, GoogleLoginProvider, SocialUser} from "angularx-social-login";
import {UsrModelServer} from "../models/usr";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth = false;
  private server_url = environment.serverurl;
  // @ts-ignore
  private user;
  // @ts-ignore
  longid :string
  // @ts-ignore
  userData$ = new BehaviorSubject<SocialUser | ResponseModel>(null);
  authState$ = new BehaviorSubject<boolean>(this.auth);
  constructor(private authService:AuthService,
              private httpClient:HttpClient) {

    authService.authState.subscribe((user:SocialUser)=>{
      if (user != null){
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user);
      }
    });
  }
  // login with email
  loginUser(email:string, password:string){

    this.httpClient.post(`${this.server_url}/auths/login`,{email, password})
      // @ts-ignore
      .subscribe((data:ResponseModel)=>{
        this.auth = data.auth;
        this.authState$.next(this.auth);
        this.userData$.next(data);
      });
  }
  // login with google
  googleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(){
    this.authService.signOut();
    this.auth = false;
    this.authState$.next(this.auth);
  }
//   SocialRegister(id:string, name:string, email:string,photorul:string, firstname:string, lastname:string){
//
//       return this.httpClient.post(`${this.server_url}/usr/register`,{id,email, name, photorul, firstname, lastname}); }




  // getSingleUser(id:string):Observable<UsrModelServer>{
  //   return this.httpClient.get<UsrModelServer>(this.server_url + '/users/' + id);
  // }



  getSingleUser(id:string):Observable<UsrModelServer>{
    return this.httpClient.get<UsrModelServer>(this.server_url + '/usr/' + id);
  }

  getAllaccounts(NumberOfResults=50) {
    return this.httpClient.get(this.server_url +'/usr', {
      params: {
        limit: NumberOfResults.toString()
      }
    });

  }


  admin(id:string){
    return this.httpClient.post(`${this.server_url}/usr/updateadmin/`+id,'');
  }

  mod(id:string){
    return this.httpClient.post(`${this.server_url}/usr/updatemod/`+id,'');
  }

  SuperAdmin(id:string){
    return this.httpClient.post(`${this.server_url}/usr/updatesadmin/`+id,'');
  }
  onUser(id:string){
    return this.httpClient.post(`${this.server_url}/usr/updateuser/`+id,'');
  }
}




export interface ResponseModel {
  token: string;
  auth: boolean;
  email: string;
  username:string;
  fname:string;
  lname:string;
  photoUrl:string;
  userId:number;
}
