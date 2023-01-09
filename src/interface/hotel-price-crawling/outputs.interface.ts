import { Hotel, ResultItem } from './index.js';

export interface Outputs {
    hotel: Hotel;
    ageThreshold: number;
    results: ResultItem[];
    pointOfSale: string;
}
