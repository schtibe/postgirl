<script>
  import * as R from "ramda";
  export let headers = [];

  function addHeader() {
    headers = [...headers, { name: "", value: "" }];
  }

  function removeHeader(header) {
    headers = R.without([header], headers);
  }
</script>

<div class="flex flex-col">
  <div>
    <h2 class="text-xl">Headers:</h2>
  </div>
  <div class="mt-2">
    {#each headers as header}
      <div class="flex justify-between">
        <input bind:value={header.name} class="w-full" />
        <input bind:value={header.value} class="w-full ml-2" />
        <button
          on:click={removeHeader(header)}
          class=" btn--secondary w-32 ml-2">-</button>
      </div>
    {/each}
  </div>
  <button on:click={addHeader} class="btn--secondary mt-2">Add Header</button>
</div>
