<script lang="ts">
	import SidebarHeader from './SidebarHeader.svelte';
	import SidebarBody from './SidebarBody.svelte';
	import type Note from '$lib/types/Note';

	export let notes: Note[] = [];
	export let handleNoteClick: (id: number) => (event?: Event) => void = () => () => {};
	export let selectedNoteId: number | undefined = undefined;
</script>

<div id="side-bar" class="min-h-screen shadow-2xl bg-white">
	<SidebarHeader>Svelte Notes</SidebarHeader>
	<SidebarBody {handleNoteClick} {notes} {selectedNoteId} />
</div>
