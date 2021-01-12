<script>
  import * as R from "ramda";
  import axios from "axios";
  import MethodSelect from "./MethodSelect.svelte";
  import RequestHeaders from "./RequestHeaders.svelte";

  import { requests, currentRequest } from "./store.js";

  let response;
  let requestData;
  let requestStore;

  requests.subscribe((value) => {
    requestStore = value;
  });

  currentRequest.subscribe((value) => {
    requestData = requestStore[value];
  });

  let responseHeaders;
  $: {
    if (response) {
      responseHeaders = formatResponseHeaders(response.headers);
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
      method: requestData.method,
      url: requestData.url,
      headers: formatRequestHeaders(requestData.headers),
      data: requestData.data,
    });

    console.log(response);
  }

  function formatResponseHeaders(headers) {
    return R.compose(R.join("\n"), R.map(R.join(": ")), R.toPairs())(headers);
  }

  function formatRequestHeaders(headers) {
    // Turn the headers into a list [{name: value}] then merge them together
    return R.mergeAll(
      R.map((value) => ({ [R.prop("name", value)]: R.prop("value", value) }))(
        headers
      )
    );
  }
</script>

<div class="flex flex-col">
  <input
    bind:value={$requests[$currentRequest].name}
    placeholder="request name" />

  <div class="flex mt-4">
    <MethodSelect bind:method={$requests[$currentRequest].method} />
    <input
      class="w-full ml-4"
      placeholder="URL"
      bind:value={$requests[$currentRequest].url} />
  </div>
  <div class="mt-4">
    <RequestHeaders bind:headers={$requests[$currentRequest].headers} />
  </div>

  <h2>Data:</h2>
  <textarea
    disabled={$requests[$currentRequest].method == 'get'}
    placeholder="JSON data"
    class="h-32 mt-4"
    bind:value={$requests[$currentRequest].data} />
  <button
    class="self-end w-32 mt-4 btn--primary"
    on:click={submit}>Submit</button>
</div>

<div>Status code: {status}</div>

<div class="flex flex-col mt-4">
  <h2>Response:</h2>
  <textarea
    placeholder="response header"
    value={responseHeaders}
    class="h-32 mt-2" />
  <textarea
    placeholder="response data"
    value={responseData}
    class="h-32 mt-4" />
</div>
