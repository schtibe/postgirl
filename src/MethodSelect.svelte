<script>
  export let method;
</script>

<main>
  <select bind:value={method}>
    <option value="get">GET</option>
    <option value="post">POST</option>
  </select>
</main>
