import Observation from "./observation";
import { Rules } from "./rules";
import { Fine } from "./fine";
import { Violation } from "./violations";

export default class Radar{
    private rules:Rules[]=[];
    private fines:Fine[]=[];
    
    addRule(rule:Rules){
        this.rules.push(rule);
    }


    processObservation(observation:Observation){
       let violations:Violation[]=[];
       
        for(const rule of this.rules){
          let violation=rule.check(observation);
          if(violation){
            violations.push(violation)
          }
        }
        if(violations.length>0){
            this.fines.push(
                new Fine(
                    observation.plateNumber,
                    violations
                )
            )
        }
    }

    getAllFines(){
         this.fines.forEach(fine=>{
        console.log(`Traffic for car ${fine.plateNumber}`)
        console.log(`Total amount: ${fine.getTotalAmount()} EGP`)
        console.log(`Violations:`)
        fine.violations.forEach(violation=>{
            console.log(` - ${violation.ruleName}: ${violation.fee} EGP`)
        })
        console.log('====================================')
        })
    }


    getAllViolationCounts(){
        const counts = new Map<string,number>();
        for(const fine of this.fines){
            for(const violation of fine.violations){
                const currentCount = counts.get(violation.ruleName)||0;
                counts.set(violation.ruleName,currentCount+1);
            }
        }
        return Array.from(counts.entries()).map(([ruleName,count])=>({
            ruleName,
            count
        }))
    }
    
}