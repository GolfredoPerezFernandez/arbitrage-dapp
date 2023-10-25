import {ActionFunction, json} from '@remix-run/node';
import { parseEventData } from '~/utils/parseEventData';

export const action: ActionFunction = async ({request}) => {

  try {
    console.log("data "+request);

    return null
  } catch(error) {
    console.log('errorStream', error)
  }
  return null
};