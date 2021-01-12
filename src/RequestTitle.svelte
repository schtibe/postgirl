<script>
  export let value;

  let isEditing = false;

  function toggleEdit() {
    isEditing = !isEditing;
  }
</script>

{#if isEditing}
  <div class="flex items-center justify-between">
    <input bind:value placeholder="request name" class="w-full" />
    <button on:click={toggleEdit} class="ml-2 btn--primary">save</button>
  </div>
{:else}
  <div class="flex items-center ">
    <h1>{value}</h1>
    <button on:click={toggleEdit}>
      <div class="w-4 h-4 fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-edit-2"><path
            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
      </div>
    </button>
  </div>
{/if}
