<script>
  import { requests, currentRequest, defaultRequest } from "./store.js";

  let requestStore = [];

  requests.subscribe((value) => {
    requestStore = value;
  });

  function addRequest() {
    requests.update((requests) => [...requests, defaultRequest()]);
  }

  function selectRequest(number) {
    currentRequest.set(number);
  }
</script>

<div class="flex flex-col">
  {#each requestStore as request, index}
    <div>
      <a href="#" on:click={() => selectRequest(index)}>{request.name}</a>
    </div>
  {/each}

  <button on:click={addRequest} class="btn--primary">+</button>
</div>
