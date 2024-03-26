import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const isDarkAtom = atomWithStorage('darkMode', false);

export const toggleTheme = atom(null, (get, set) => {
    set(isDarkAtom, !get(isDarkAtom));
});
