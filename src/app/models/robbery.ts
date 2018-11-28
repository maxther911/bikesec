import { Coords } from "./coords";
import { Bike } from "./bike";

export interface Robbery {
    id? : string;
    dateRegister? : Date;
    userReport? : string;
    coords?  : Coords;
    bike? : Bike;
}
