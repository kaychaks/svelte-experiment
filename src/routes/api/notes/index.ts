import * as NotesService from '$lib/services/notes';
import type { RequestHandler } from '@sveltejs/kit';

const get: RequestHandler = async (request) => {
	const errorResponse = { status: 500 };
	try {
		const { body } = await NotesService.get(request);
		return { body };
	} catch (e) {
		return errorResponse;
	}
};

export { get };
