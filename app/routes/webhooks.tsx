import {ActionFunction, json} from '@remix-run/node';
let count=0

export const action: ActionFunction = async ({request}) => {
  const payload = await request.json();
  console.log(JSON.stringify(payload))
  console.log(count++)
  return null
};