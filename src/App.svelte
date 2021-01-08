<script>
	import RequestList from "./RequestList.svelte";
	import RequestWindow from "./RequestWindow.svelte";
	import LoadConfig from "./LoadConfig.svelte";
</script>

<style global>
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
	@tailwind utilities;
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
