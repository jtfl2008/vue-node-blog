import axios from '../common/js/axios'
import {isDev} from '../common/js/util'

// 登录或注册
export function submit(name, password, repassword, type = 'signin') {
    if (type === 'signin') {
        let data = {
            name,
            password
        }

        return axios.post('signin', data)
    } else {
        let data = {
            name,
            password,
            repassword
        }

        return axios.post('signup', data)
    }
}

export function githubLogin(redirect) {
    let url = isDev ? 'http://localhost:3000/api/signin/github' : '/api/signin/github'
    url = redirect ? `${url}?redirect=${redirect}` : url
    window.location.href = url
}

// 登出
export function signout() {
    return axios.get('signout')
}

export function getUserInfo() {
    return axios.post('user/getUserInfo')
}
