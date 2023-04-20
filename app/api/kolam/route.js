import jsonData from '../../../public/selangor.json'

export async function GET(request) {
  const res = JSON.stringify(jsonData)
  // console.log(res)
  
  return new Response(res)
}


