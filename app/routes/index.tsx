

export const action = async ({request}) => {
  
  console.log(await request.json())

  return {};
}

export default function Index() {
  return (
    <>
      {/* <h1>RainbowKit Example</h1>
      <p>Check out the documentation <a href="https://www.rainbowkit.com/docs/introduction">here</a>here.</p> */}
    </>
  );
}
