<script>
  export let method = "get";
  import * as R from "ramda";

  import { requestColor } from "./RequestMethodColor";

  let _methods = ["get", "post", "put", "patch", "delete"];

  let methods = R.map((value) => ({ value, name: R.toUpper(value) }))(_methods);
</script>

<select bind:value={method} class={requestColor(method)}>
  {#each methods as { name, value }}
    <option {value}>{name}</option>
  {/each}
</select>
