import { ResultItem, Search } from "./index.js";

export interface Inputs {
    url: string;
    previousResults: ResultItem[];
    searches: Search[];
}
