import {ActionFunction, json} from '@remix-run/node';
import { fetchTransaction } from '@wagmi/core'
const Moralis = require("moralis").default;
import { EvmChain } from "@moralisweb3/common-evm-utils";

export const action: ActionFunction = async ({request}) => {

  try {   
     console.log("data "+JSON.stringify(request));

     await Moralis.start({
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjkyMjc0YTFkLTJlYTAtNDU4OC1hOTBkLWEwMDI1NGZjNzJmNyIsIm9yZ0lkIjoiMTEyNjEiLCJ1c2VySWQiOiI0MTY2IiwidHlwZUlkIjoiN2QzMjY4NWMtYzkxMS00M2ZjLTllNmQtNzEwODMzMTdhZDM4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODQ0MjY0MTIsImV4cCI6NDg0MDE4NjQxMn0.d4uuweMvjvXqdUXOPKOUgdogOISCmPKpyDElA5kY6s4",
      // ...and any other configuration
    });
  
    const transactionHash = "0x88ebc25f5bc02860938fc795d58a56b10a6361e57e4ef2d3c16ccb94acbf3e51";
  
    const network =EvmChain.POLYGON;
  
    const response = await Moralis.AptosApi.transactions.getTransactionByHash({
      transactionHash,
      network
    });
  
    console.log(response);
    return null
  } catch(error) {
    console.log('errorStream', error)
  }
  return null
};