export interface personajes {


  info:Info;
  results:Result[];




}

interface Info {
  count:number;
}
export interface  Result {
      id:number;
      name:string;
      type:string;
      dimension:string;
      residents:string[];
      url:string;
      DateTime:Date;
}
