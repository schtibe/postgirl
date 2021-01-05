<script>
  export let headers = [];

  function addHeader() {
    headers = [...headers, { name: "", value: "" }];
  }
</script>

<main>
  <div class="flex flex-col">
    <div>Headers:</div>
    {#each headers as header}
      <div class="flex">
        <input bind:value={header.name} />
        <input bind:value={header.value} />
      </div>
    {/each}
    <button on:click={addHeader} class="w-12">Add</button>
  </div>
</main>
