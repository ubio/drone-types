import { Room } from "./room.interface.js";

export interface Result {
    estimated: boolean;
    crawledAt: number;
    rooms: Room[];
}
