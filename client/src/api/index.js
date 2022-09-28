import axios from 'axios'

const BASE_URL = 'http://localhost:4000/sick?q='
let cacheName = 'newCache'
const Axios = axios.create({
  baseURL: BASE_URL,
})

export const getSearchApi = async query => {
  let params = new URLSearchParams({ q: query })

  let url = BASE_URL + `${query}`
  caches.open(cacheName).then(cache => {
    cache.add(url)
  })
  const request = new Request(url)
  console.log(request)
  const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true,
  }
  const response = await caches.match(request, options).then(res => {
    console.log(res)
    if (res) {
      return res
    } else {
      return fetch(url).then(res => {
        return caches.open(cacheName).then(cache => {
          cache.put(url, res.clone())
        })
      })
    }
  })
  return await response.json()
  // fetch(url).then(res => {
  //   return caches.open(cacheName).then(cache => {
  //     return cache.put(url, res)
  //   })
  // })

  // caches.open(cacheName).then(cache => {
  //   cache.match(url).then(settings => {
  //     console.log(settings)
  //   })
  // })

  // caches.open(cacheName).then(cache => {
  //   cache.keys(url).then(url => {
  //     console.log(url)
  //   })
  // })
  // const res = await fetch(url, { credentials: 'include' })

  // console.log(await res.json())
  // await caches.open(cacheName).then(cache => {
  //   return cache.put(url, res)
  // })
  // console.log('calling api')
  // if (res.ok) {
  //   return await res.json()
  // }
}
