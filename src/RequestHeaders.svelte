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
      <div class="flex justify-between mt-2">
        <input bind:value={header.name} class="w-full" />
        <input bind:value={header.value} class="w-full ml-2" />
        <button
          on:click={removeHeader(header)}
          class="w-32 ml-2 btn--secondary">-</button>
      </div>
    {/each}
  </div>
  <button on:click={addHeader} class="self-end w-64 mt-2 btn--secondary">Add
    Header</button>
</div>
