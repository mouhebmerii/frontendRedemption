export interface News {
  id: number;
  title: string;
  body: string;
  picture:string;
  createdate: Date;
}
export interface ServerResponse{
  count:number;
  post:News[];
}
