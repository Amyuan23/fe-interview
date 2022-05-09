function debounce(fn, wait = 200) {
  let timer = 0
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = 0
    }, wait)
  }
}

// 使用
document.getElementsByTagName('body')[0].onmousemove = debounce(() => {
  console.log('kkkkk')
}, 1000)
