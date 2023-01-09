import { NamedPrice, Price } from '../generic/index.js';

export interface Rate {
    name: string;
    id?: string;
    description?: string;
    occupancy?: number;
    breakfastIncluded?: boolean;
    parkingIncluded?: boolean;
    internetIncluded?: boolean;
    baseRate: Price;
    taxes: NamedPrice[];
}
