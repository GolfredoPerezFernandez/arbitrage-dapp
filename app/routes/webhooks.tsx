import {ActionFunction, json} from '@remix-run/node';
import { parseEventData } from '~/utils/parseEventData';
import { verifySignature } from '~/utils/verifySignature';
import  parseUpdate  from '~/utils/parseUpdate';

export const action: ActionFunction = async ({request}) => {

  try {
    const { data, _tagName, eventName }: any = parseEventData(request);
    console.log(data);
    return null
  } catch(error) {
    console.log('errorStream', error)
  }
  return null
};