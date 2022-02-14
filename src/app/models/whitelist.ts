export interface whitelist {
  id: number,
  email: string,
  full_name: string,
  dname: string,
  age: number,
  steamlink: string,
  server_kno: string,
  caractere_name: string,
  rp_exp: string,
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5:string ,
  q6: string,
  q7: string,
  q8: string,
  q9:string ,
  q10:string ,
  status:string,
  date:string,
  form:string
}
export interface ServerwResponse{
  count:number;
  post:whitelist[];
}
