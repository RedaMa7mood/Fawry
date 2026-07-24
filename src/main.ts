import Radar from "./radar";
import Observation from "./observation";
import { CarType } from "./observation";
import { Rules, speedRule, seatbeltRule } from "./rules";

const radar = new Radar();

radar.addRule(new speedRule());
radar.addRule(new seatbeltRule());


const observations=[
    new Observation("k789",100,new Date("2026-07-24"),CarType.Private,true),
    new Observation("k489",120,new Date("2026-07-24"),CarType.Truck,false),
    new Observation("k256",80,new Date("2026-07-24"),CarType.Private,true),
    new Observation("k378",90,new Date("2026-07-24"),CarType.Truck,true),
    new Observation("k456",120,new Date("2026-07-24"),CarType.Private,false),
]

for(const observation of observations){
    radar.processObservation(observation);
}
radar.getAllFines();

console.log(radar.getAllViolationCounts());