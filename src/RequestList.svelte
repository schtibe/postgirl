<script>
  import { requests, currentRequest, defaultRequest } from "./store.js";

  import { requestColor } from "./RequestMethodColor.js";

  let requestStore = [];
  let currentRequestLocal;

  currentRequest.subscribe((value) => {
    currentRequestLocal = value;
  });

  requests.subscribe((value) => {
    requestStore = value;
  });

  function selectRequest(number) {
    currentRequest.set(number);
  }

  function toUpper(value) {
    return value.toUpperCase();
  }
</script>

<style lang="postcss">
  .selected {
    @apply text-primary;
  }

  a {
    @apply text-black;
  }

  a:hover {
    @apply text-gray-500;
  }
</style>

<h2>My Requests</h2>
<div class="flex flex-col h-full">
  {#each requestStore as request, index}
    <div class="mt-1">
      <a
        href="#"
        on:click={() => selectRequest(index)}
        class:selected={index == currentRequestLocal}>
        <span class={requestColor(request.method)}>
          {toUpper(request.method)}
        </span>
        {request.name}
      </a>
    </div>
  {/each}

  <button on:click={requests.addNew} class="mt-auto btn--primary">
    Add new request
  </button>
</div>
