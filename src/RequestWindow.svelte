<script>
  import * as R from "ramda";
  import axios from "axios";
  import MethodSelect from "./MethodSelect.svelte";

  let url = "https://";
  let method;
  let response;

  let responseHeaders;
  $: {
    if (response) {
      responseHeaders = formatHeaders(response.headers);
    } else {
      responseHeaders = "";
    }
  }

  let responseData;
  $: {
    if (response) {
      responseData = JSON.stringify(response.data, null, 2);
    } else {
      responseData = "";
    }
  }

  let status;
  $: {
    if (response) {
      status = `${response.status} ${response.statusText}`;
    } else {
      status = "-";
    }
  }

  async function submit() {
    response = await axios({
      method,
      url,
    });

    console.log(response);
  }

  function formatHeaders(headers) {
    return R.compose(R.join("\n"), R.map(R.join(": ")), R.toPairs())(headers);
  }
</script>

<main>
  <div class="flex flex-col">
    <div class="flex">
      <MethodSelect bind:method />
      <input class="w-full" placeholder="URL" bind:value={url} />
    </div>
    <textarea placeholder="data" class="mt-4 h-32" />
    <button class="w-32 self-end mt-4" on:click={submit}>Submit</button>
  </div>

  <div>Status code: {status}</div>

  <div class="mt-10 flex flex-col">
    <textarea
      placeholder="response header"
      value={responseHeaders}
      class="h-32" />
    <textarea
      placeholder="response data"
      value={responseData}
      class="mt-4 h-32" />
  </div>
</main>
