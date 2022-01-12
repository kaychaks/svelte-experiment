import { writable } from 'svelte/store';

const allNotes = writable([]);

export { allNotes };
