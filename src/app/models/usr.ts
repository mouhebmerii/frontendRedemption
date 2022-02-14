export interface Usr {
  longid: string;
  username: string;
  email: string;
  fname:string;
  lname:string;
  // age:number;
  role:string;

  // adress:string;
  photoUrl:string;
  type:string;
  joindate:string;
  longidchar:string
}
 export interface UsrModelServer{
  count:number;
  user:Usr[];
}
