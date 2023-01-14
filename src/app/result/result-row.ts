import { Vote } from "./vote";

export interface ResultRow {
    value: string;
    points: number;
    votes: Vote[];
}