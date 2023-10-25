import {ActionFunction, json} from '@remix-run/node';
import { parseEventData } from '~/utils/parseEventData';

export const action: ActionFunction = async ({request}) => {

  try {
    const { data, _tagName, eventName }: any = parseEventData(request);
    console.log("data "+data);
    console.log("eventName "+eventName);
    console.log("_tagName "+_tagName);

    return null
  } catch(error) {
    console.log('errorStream', error)
  }
  return null
};