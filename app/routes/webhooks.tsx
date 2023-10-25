import {ActionFunction, json} from '@remix-run/node';
import { fetchTransaction } from '@wagmi/core'

export const action: ActionFunction = async ({request}) => {

  try {   
     console.log("data "+JSON.stringify(request.txs));

    const transaction = await fetchTransaction({
      hash: '0x88ebc25f5bc02860938fc795d58a56b10a6361e57e4ef2d3c16ccb94acbf3e51',
    })
console.log("transaction "+transaction)
    return null
  } catch(error) {
    console.log('errorStream', error)
  }
  return null
};