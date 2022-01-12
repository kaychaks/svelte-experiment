<script context="module" lang="ts">
	const load = ({ error, status }) => {
		return {
			props: {
				status,
				error: error.message
			}
		};
	};

	export { load };
</script>

<script lang="ts">
	export let status: number;
	export let error: string;
</script>

<h1>{status}</h1>
<section>
	<p>{error}</p>
</section>
