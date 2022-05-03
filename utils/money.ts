/**
 * 用于金额展示，千位逗号
 * @param money '22333.44'
 * @returns '22,333.44'
 */
export const formatThousandComma = (money: string | number) => {
  money = String(money)
  if (!/^[-+]?[0-9]*\.?[0-9]+$/.test(money)) return
  const list = money.split('.')
  const integer = list[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return list[1] ? integer + '.' + list[1] : integer
}

/**
 * 保留两位小数
 * @param num 99.123
 * @param denominator 可设置分母，如分转元，设置为100
 * @returns 99.12
 */
export const formatTwoDecimal = (num: number | string, denominator = 1) => {
  num = Number(num)
  if (typeof num === 'number') {
    return ((num || 0) / denominator).toFixed(2)
  }
  return ''
}

/**
 * 超过超过1W以万为单位，且保留两位小数
 * @param num
 * @param size
 * @param unit
 */
export const formatTenThousand = (num: number, size = 10000, unit = '万') => {
  if (typeof num !== 'number') return
  return num >= size ? (num / size).toFixed(2) + unit : num.toFixed(2)
}
