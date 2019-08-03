import axios from 'axios'

// if(process.env.NODE_ENV == 'development'){
//   axios.defaults.baseURL = '/api'
// }else if(process.env.NODE_ENV == 'production'){
//   axios.defaults.baseURL = 'https://douban.uieee.com/v2'
// }

class HTTP {
  request({url, data={}, method="GET"}){
    return new Promise((resolve, reject) => {
      if(process.env.NODE_ENV == 'development'){
        url = '/api' + url
      }else if(process.env.NODE_ENV == 'production'){
        url = 'https://douban.uieee.com/v2' + url
      }
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data={}, method="GET"){
    // url, data, method
    axios({
      url,
      method,
      data,
      headers: {
        'content-type': "application/json",
      }
    })
    .then(res => {
      let code = res.status.toString()
      if(code.startsWith('2')){
        resolve(res.data)
      }
    },
      err => {
        reject(err)
        // this._show_error(err)
    }) 
  }

  _show_error(err){
    Message({
      type: "error",
      title: "小提示",
      message: err,
      duration: 2000,
    })
  }
}

export {HTTP}
