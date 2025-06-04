import {Months, Days, Direction} from './text-arrays'

export const DegreesToDirection = (degrees) => {
    const value = Math.floor((degrees / 22.5) + 0.5);
    return Direction[value % 16];
}

const date = new Date();
export const Month = Months[date.getMonth()];
export const Weekday = Days[date.getDay()];
export const Day = date.getDate();