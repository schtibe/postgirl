<script>
	import RequestList from "./RequestList.svelte";
	import RequestWindow from "./RequestWindow.svelte";
	import LoadConfig from "./LoadConfig.svelte";
</script>

<style global lang="postcss">
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
	@tailwind utilities;

	button {
		@apply rounded;
		@apply px-2 py-1;
	}

	.btn--primary {
		@apply bg-primary border-primary;
		@apply text-white;
	}

	.btn--primary:hover {
		@apply bg-secondary;
	}

	.btn--secondary {
		@apply bg-tertiary;
		@apply text-black;
	}

	.btn--secondary:hover {
		@apply bg-secondary;
	}

	input,
	textarea {
		@apply px-2;
		@apply rounded;
		@apply border border-tertiary;
	}
</style>

<main>
	<div class="flex justify-between">
		<div class="w-32">
			<RequestList />
		</div>
		<div class="ml-8 w-full">
			<RequestWindow />
		</div>
	</div>
	<LoadConfig />
</main>
