<script context="module" lang="ts">
	import type Note from '$lib/types/Note';

	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	const load = async ({ fetch, stuff, page: { params } }: LoadInput): Promise<LoadOutput> => {
		const { note } = stuff as { note: Note[] };
		const { id } = params;
		if (note) {
			return { props: { note } };
		} else {
			return {
				status: 404,
				error: new Error(`Note ${id} is not available`)
			};
		}
	};
	export { load };
</script>

<script lang="ts">
	export let note: Note;
</script>

{note.details}
