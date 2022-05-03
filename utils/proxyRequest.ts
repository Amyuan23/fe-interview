const reqMaps = new Map()

/**
 * 劫持合并相同的request
 * @param method promise request
 * @returns promise
 */
export const proxyRequest = (method: any) => {
  return new Proxy(method, {
    async apply(target, thisArg, args) {
      const apiKey = JSON.stringify(args) // 这个apiKey为接口路径&入参结合的唯一的字符串

      if (reqMaps.has(apiKey)) {
        return reqMaps.get(apiKey)
      }

      const requestPromise = Reflect.apply(target, thisArg, args)
        .then((data: any) => {
          reqMaps.delete(apiKey)
          return Promise.resolve(data)
        })
        .catch((err: any) => {
          reqMaps.delete(apiKey)
          return Promise.reject(err)
        })

      reqMaps.set(`${apiKey}`, requestPromise)

      return requestPromise
    }
  })
}
