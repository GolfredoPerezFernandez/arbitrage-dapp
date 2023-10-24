
import { ActionFunction, json } from "@remix-run/node"; // or cloudflare/deno

export const action = async ({
    request,
  }: ActionFunction)  =>{
    console.log(await request.json())
}