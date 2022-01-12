<section
	class="grid grid-cols-4 gap-3 h-24 place-content-center border-b-2 border-gray-300 border-opacity-50"
>
	<div>
		<img class="object-scale-down" src="/favicon.png" alt="Svelte" />
	</div>
	<div class="col-span-3 grid grid-cols-2 place-content-center">
		<span
			class="font-bold antialiased tracking-wider text-opacity-80 text-3xl col-span-2 text-gray-700"
			><slot /></span
		>
	</div>
</section>
