import * as R from "ramda";
import { writable } from "svelte/store";

export const defaultRequest = () =>  (
{
    id: new Date().getTime(),
    name: 'new request',
    url: "https://",
    headers: [
      {
        name: "Content-Type",
        value: "application/json",
      },
    ],
    method: "get",
    data: "",
  }
 )


export const currentRequest = writable(0)

function createRequests() {
  const { subscribe, set, update } = writable([defaultRequest()]);

  let requestData;

  subscribe(data => {
    requestData = data;
  })

  const addNew = () => {
    update((requests) => [...requests, defaultRequest()]);
  }

  const remove = (request) => {
    requests.set(R.without([request], requestData));
    currentRequest.set(0)
  }

  return {
    subscribe,
    set,
    update,
    addNew,
    remove,
    select: n => currentRequest = n,
  }
}

export const requests = createRequests();