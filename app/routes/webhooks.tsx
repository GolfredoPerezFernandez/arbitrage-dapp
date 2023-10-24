import {ActionFunction, json} from '@remix-run/node';

export const action: ActionFunction = async ({request}) => {
 
  const payload = await request.json();
  console.log(JSON.stringify(payload))
  return null
};