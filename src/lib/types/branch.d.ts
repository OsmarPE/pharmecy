import { Contact } from "./contact";
import { Location } from "./location";
import { Schedule } from "./schedule";

export interface Branch {
    id: number;
    name: string;
    schedules?: Schedule[];
    location?: Location;
    contact?: Contact;
}