import { writable } from "svelte/store";

export const defaultRequest = () =>  (
{
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

export const requests = writable([
  defaultRequest()
])

export const currentRequest = writable(0)