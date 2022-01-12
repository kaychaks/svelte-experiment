<script context="module" lang="ts">
	const load = ({ error }) => {
		return {
			props: {
				error: error.message
			}
		};
	};

	export { load };
</script>

<script lang="ts">
	export let error: string;
</script>

{error}
