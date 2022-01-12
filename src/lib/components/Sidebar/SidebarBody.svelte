<script lang="ts">
	import type Note from '$lib/types/Note';
	import { onMount } from 'svelte/internal';
	import SidebarNote from './SidebarNote.svelte';

	export let handleNoteClick: (noteId: number) => (event?: Event) => void;
	export let notes: Note[];
	export let selectedNoteId: number | undefined = undefined;

	let noteRefs: HTMLElement[] = [];

	const refPred = (ns: Note[], fId: number) => (_n: HTMLElement, index: number) => {
		const idx = fId && ns.findIndex((n) => n.id === fId.toString());
		if (idx >= 0) {
			return index === idx;
		}
		return false;
	};

	const findRef = (fId: number, nsRefs: HTMLElement[], ns: Note[]) => nsRefs.find(refPred(ns, fId));

	const handleEnterPress = (id: string) => (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleNoteClick(parseInt(id))();
		}
	};

	onMount(() => {
		const noteRef = findRef(selectedNoteId, noteRefs, notes);
		if (noteRef) {
			noteRef.focus();
		}
	});
</script>

<nav class="flex flex-col mt-4">
	{#if !Array.isArray(notes) || notes.length === 0}
		<SidebarNote>No Notes</SidebarNote>
	{:else}
		<ul class="space-y-1">
			{#each notes as note, index (note.id)}
				<li
					bind:this={noteRefs[index]}
					tabindex={index + 1}
					on:click={handleNoteClick(parseInt(note.id))}
					on:keydown={handleEnterPress(note.id)}
					class="cursor-pointer border-b-2 bg-red-50 hover:bg-red-300 focus:bg-red-400"
				>
					<SidebarNote {note}>{note.title}</SidebarNote>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
