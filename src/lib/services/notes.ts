import type ID from '../types/ID';
import type { Request, EndpointOutput } from '@sveltejs/kit';
import { allNotes, notesById } from './mocks';

const get = async (_request?: Request, id?: ID): Promise<EndpointOutput> => {
	if (id) {
		// TODO: get it from DB
		const note: Note = notesById[id];
		return {
			body: note && JSON.stringify(note)
		};
	}
	return {
		body: JSON.stringify(allNotes)
	};
};

export { get };
