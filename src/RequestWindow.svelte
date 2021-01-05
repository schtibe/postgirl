<script>
  import * as R from "ramda";
  import axios from "axios";
  import MethodSelect from "./MethodSelect.svelte";
  import RequestHeaders from "./RequestHeaders.svelte";

  let requestData = {
    url: "https://",
    headers: [
      {
        name: "Content-Type",
        value: "application/json",
      },
    ],
    method: "get",
    data: "",
  };

  let response;

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

<main>
  <div class="flex flex-col">
    <div class="flex">
      <MethodSelect bind:method={requestData.method} />
      <input class="w-full" placeholder="URL" bind:value={requestData.url} />
    </div>
    <RequestHeaders bind:headers={requestData.headers} />
    <textarea
      placeholder="JSON data"
      class="mt-4 h-32"
      bind:value={requestData.data} />
    <button class="w-32 self-end mt-4" on:click={submit}>Submit</button>
  </div>

  <div>Status code: {status}</div>

  <div class="mt-4 flex flex-col">
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
