
import { useContractEvent } from 'wagmi'
const v2PairArtifact = require('@uniswap/v2-periphery/build/IUniswapV2Pair.json')

export async function loader() {
  
  return null;
}
export default function Index() {
  
 const {a}= useContractEvent({
    address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
    abi: v2PairArtifact.abi,
    eventName: 'Swap',
    listener(log) {
      console.log(log)
    },
    chainId: 80001,
  })
  return (
    <>
      {/* <h1>RainbowKit Example</h1>
      <p>Check out the documentation <a href="https://www.rainbowkit.com/docs/introduction">here</a>here.</p> */}
    </>
  );
}
