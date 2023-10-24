import {ActionFunction} from '@remix-run/node';

export const action: ActionFunction = async ({request}) => {
console.log(JSON.stringify(request))

};