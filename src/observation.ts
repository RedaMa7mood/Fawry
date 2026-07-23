export default class Observation {
   constructor(
   public plateNumber:string,
   public speed:number,
   public date:Date,
   public carType:CarType,
   public seatbeltStatus:boolean
   ){} 
}

export enum CarType{
    Private ="private",
    Truck ="truck",
    Bus ="bus",
}

