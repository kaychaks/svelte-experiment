<script lang="ts">
	import type Note from '$lib/types/Note';

	export let note: Note = undefined;
	let createdAt: string;
	$: createdAt = note?.createdAt && new Date(note.createdAt).toLocaleDateString();
</script>

<div class="p-1">
	<span class="block text-lg font-medium text-gray-700">
		<slot />
	</span>
	{#if createdAt}
		<div>
			<span id="createdAt" class="text-gray-500 text-sm">{createdAt}</span>
		</div>
	{/if}
</div>
