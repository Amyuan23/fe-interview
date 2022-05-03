import dayjs, { ConfigType } from 'dayjs'

/**
 * 获取当天最早零点时间时间戳
 * @param day
 * @returns
 */
export function getDayStartValue(day: ConfigType) {
  return dayjs(day).startOf('date').valueOf()
}

/**
 * 获取当天最晚23:59:59时间戳
 * @param day
 * @returns
 */
export function getDayEndValue(day: ConfigType) {
  return dayjs(day).endOf('date').valueOf()
}

/**
 * 格式化时间展示
 * @param value
 * @returns
 */
export const formatDate = (value) => {
  if (!value) return
  return dayjs(value).format('YYYY-MM-DD')
}

/**
 * 获取当月第一天至当月前n天的值
 * @returns
 */
export const getCurrentMonthRange = (lastIndex = 0) => {
  const start = dayjs().startOf('month').valueOf()
  const end = dayjs().subtract(lastIndex, 'day').valueOf()
  return [start, end]
}
