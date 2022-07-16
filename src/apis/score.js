import request from 'superagent'

const rootUrl = '/api/v1'

export function APIgetScore() {
  return request.get(rootUrl).then((res) => {
    // console.log(res.body)
    return res.body
  })
}
