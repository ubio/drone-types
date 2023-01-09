import { Link } from '../generic/link.interface.js';
import { Rate } from './rate.interface.js';

export interface Room {
    name: string;
    id?: string;
    description?: string;
    capacity?: number;
    occupancy?: number;
    images?: Link;
    rates: Rate[];
}
