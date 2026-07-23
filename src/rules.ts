import Observation, { CarType } from "./observation";
import { Violation } from "./violations";


export interface Rules{
     RuleName:string;
    check(observation:Observation):Violation|null;
}

export class speedRule implements Rules{

    public RuleName="speed";

  check(observation: Observation): Violation | null {
      let maxSpeed :number|null=null;
      if(observation.carType===CarType.Private){
        maxSpeed=80;
      }
      if(observation.carType===CarType.Truck){
        maxSpeed=60;
      }
      if(maxSpeed!==null && observation.speed>maxSpeed){
        return new Violation(this.RuleName,`speed of ${observation.speed} exceeded max allowed ${maxSpeed}`,300);
      }
      return null;

  }

}

export class seatbeltRule implements Rules{
    public RuleName="seatbelt";
    check(observation: Observation): Violation | null {
        if(observation.seatbeltStatus===true){
            return new Violation(this.RuleName,`Seatbelt not fastned`,100);
        }
        return null;
    }
}