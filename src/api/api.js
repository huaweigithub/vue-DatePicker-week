import {get, post} from './index'

export const getUsers = () => {
  return get(`https://jsonplaceholder.typicode.com/users`)
}