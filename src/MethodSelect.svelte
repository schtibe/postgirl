<script>
  export let method = "get";
</script>

<main>
  <select bind:value={method}>
    <option value="get">GET</option>
    <option value="post">POST</option>
    <option value="put">PUT</option>
    <option value="patch">PATCh</option>
    <option value="delete">DELETE</option>
  </select>
</main>
