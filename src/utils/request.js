function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}
function handleError (err) {
  console.log(err)
}
export function get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(res => {
          if (res && res.data && res.data.error_code === 0) {
            resolve(res)
          } else {
            const msg = (res && res.data && res.data.msg) || '请求失败'
            mpvue.showToast({
              title: msg,
              duration: 2000
            })
            reject(res)
          }
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(res => {
          if (res && res.data && res.data.error_code === 0) {
            resolve(res)
          } else {
            const msg = (res && res.data && res.data.msg) || '请求失败'
            mpvue.showToast({
              title: msg,
              duration: 2000
            })
            reject(res)
          }
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
