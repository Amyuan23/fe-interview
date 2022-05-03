import { saveAs } from 'file-saver'
/**
 * 下载blob文件
 * @param res 后端返的文件流
 * @param name 文件名
 */
export const downloadFile = (res, name) => {
  const blob = new Blob([res])
  saveAs(blob, name + '.xlsx')
}

export const downloadFile2 = (res, name) => {
  const blob = new Blob([res])
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = name + '.xlsx'
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
