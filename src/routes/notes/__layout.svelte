<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	const load = async ({ fetch, page: { params } }: LoadInput): Promise<LoadOutput> => {
		const { id } = params;
		let note: Note;

		const allNotesResp: Response = await fetch('/api/notes');
		const notes: Note[] = await allNotesResp.json();

		if (id) {
			note = notes.find((n) => n.id === id);
		}

		const isEmpty: <A>(o: A) => boolean = (o) =>
			o && Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;

		return { props: { notes }, stuff: { notes, note: !isEmpty(note) && note } };
	};

	export { load };
</script>

<script lang="ts">
	import Sidebar from '$lib/components/Sidebar/index.svelte';
	import type Note from '$lib/types/Note';
	import Main from '$lib/components/Main.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let notes: Note[];

	let selectedNoteId = $page.params?.id && parseInt($page.params.id);

	const handleNoteClick =
		(id: number) =>
		(event?: Event): void => {
			goto(`/notes/${id}`, { keepfocus: true });
		};
</script>

<Sidebar {notes} {selectedNoteId} {handleNoteClick} />

<Main>
	<slot />
</Main>
