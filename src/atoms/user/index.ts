import { atom } from "jotai";

export const userIdAtom = atom(1);
export const userAtom = atom(async (get, { signal }) => {
    const userId = get(userIdAtom);
    const response = await fetch(`https://rickandmortyapi.com/api/character/${userId}?delay=2000`, { signal });
    return response.json();
});
export const prevAtom = atom(null, (get, set) => {
    if (get(userIdAtom) > 1) {
        set(userIdAtom, get(userIdAtom) - 1);
    }
});
export const nextAtom = atom(null, (get, set) => {
    set(userIdAtom, get(userIdAtom) + 1);
});
