import { atom } from "jotai";

export const counterAtom = atom(0);

export const incrementCounter = atom(null, (get, set) => {
    set(counterAtom, get(counterAtom) + 1);
})

export const decrementCounter = atom(null, (get, set) => {
    set(counterAtom, get(counterAtom) - 1);
})