import { Violation } from "./violations";

export class Fine {
    constructor(
        public plateNumber:string,
        public violations:Violation[] 
    ){}
    getTotalAmount():number{
        return this.violations
                        .reduce((total,violation)=>total+violation.fee ,0)
    }
}