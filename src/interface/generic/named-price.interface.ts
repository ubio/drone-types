import { Price } from './price.interface.js';

export interface NamedPrice {
    type: 'NamedPrice';
    name: string;
    price: Price;
}
