import * as NotesService from '$lib/services/notes';
import type { RequestHandler } from '@sveltejs/kit';

const get: RequestHandler = async (request) => {
	const {
		params: { id }
	} = request;
	const errorResponse = { status: 404 };
	try {
		const { body } = await NotesService.get(request, id);
		if (!body) {
			return errorResponse;
		}
		return { body };
	} catch (e) {
		return errorResponse;
	}
};

export { get };
