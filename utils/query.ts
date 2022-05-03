import queryString from 'query-string'

/**
 * url参数转对象
 * @param url search字符串
 * @returns
 */
export const parseQuery = (url = window.location.search) => {
  return queryString.parse(url)
}

/**
 * 对象转url query 参数
 * @param obj
 * @returns
 */
type Record<K extends string | number | symbol, T> = { [P in K]: T }
export const stringfyQuery = (obj: Record<string, any>) => {
  return queryString.stringify(obj)
}
