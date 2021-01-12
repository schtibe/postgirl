<script>
  import { requests } from "./store.js";

  let requestStore = [];
  let downloadLink;

  requests.subscribe((value) => {
    requestStore = value;
  });

  function dumpConfig() {
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(requestStore));

    downloadLink.setAttribute("href", dataStr);
    downloadLink.setAttribute("download", "postgirl.json");
    downloadLink.click();
  }

  function loadConfig() {
    console.log(this.files);
    const reader = new FileReader();
    reader.onload = function (evt) {
      const result = JSON.parse(evt.target.result);
      requests.set(result);
    };
    reader.readAsText(this.files[0]);
  }
</script>

<div class="flex flex-col mt-10">
  <button class="btn--secondary w-64" on:click={dumpConfig}>Download config</button>
  <div class="mt-4">
    Upload config:
    <input type="file" placeholder="upload config" on:change={loadConfig} />
  </div>
</div>
<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" bind:this={downloadLink} class="hidden">Download</a>
