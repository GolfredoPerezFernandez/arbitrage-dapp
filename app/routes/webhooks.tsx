

export const action = async ({request}) => {
  
  console.log(await request.json())

  return {};
}
