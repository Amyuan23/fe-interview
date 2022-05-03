/**
 * 复制文字到剪贴板
 * @param value 复制的文字
 * @param callback
 */
export const copyText = (value: string, callback?: () => void) => {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', value)
  document.body.appendChild(input)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    console.log('复制成功')
    // 有callback 执行callback,没有执行默认提示
    if (typeof callback === 'function') {
      callback()
    }
  }
  document.body.removeChild(input)
}

/**
 * 枚举
 * @param obj
 * @returns
 */
export const turnEnum = (obj) => {
  return Object.keys(obj).map((item) => ({
    value: item,
    label: obj[item]
  }))
}

/**
 * 银行卡号按四位数分割
 * @param value '111111111111111'
 * @returns '1111 1111 1111 111'
 */
export const formatBankNo = (value: string) => {
  if (!value || typeof value !== 'string') return ''
  return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ')
}

/**
 * 优化async/await错误处理
 * @param promise
 * @returns promise
 * 使用示例：const [err, data] = await awaitWrap(fetchData())
 */
export function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise.then<[null, T]>((data: T) => [null, data]).catch<[U, null]>((err) => [err, null])
}

/**
 * 生成唯一id
 * @returns
 */
export function uuid() {
  var temp_url = URL.createObjectURL(new Blob())
  var uuid = temp_url.toString() // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url)
  return uuid.substr(uuid.lastIndexOf('/') + 1)
}
