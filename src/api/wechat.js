export function getSetting (auth, onSuccess, onFaild) {
  mpvue.getSetting({
    success (res) {
      // console.log(res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        console.log('res.authSetting')
        onFaild(res)
      }
    },
    faild (res) {
      console.log(res) // 抛出异常
    }
  })
}

export function getUserInfo (onSuccess, onFaild) {
  mpvue.getUserInfo({
    success (res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFaild(res)
      }
    },
    faild (err) {
      console.log(err) // 抛出异常
    }
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}
export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}
