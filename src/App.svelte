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

	btn--primary:disabled,
	.btn--secondary:disabled {
		@apply bg-gray-200;
		@apply text-white;
		@apply cursor-not-allowed;
	}

	input:not([type="file"]),
	textarea {
		@apply py-1;
		@apply px-2;
		@apply rounded;
		@apply border border-tertiary;
	}

	a {
		@apply text-secondary;
		@apply no-underline;
	}

	h1 {
		@apply text-3xl;
		@apply text-primary;
	}

	h2 {
		@apply text-xl;
	}

	select {
		@apply bg-white;
		@apply border-tertiary;
	}
</style>

<main>
	<div class="flex justify-between">
		<div class="w-64">
			<RequestList />
		</div>
		<div class="w-full ml-8">
			<RequestWindow />
		</div>
	</div>
	<LoadConfig />
</main>
