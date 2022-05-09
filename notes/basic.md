# 基础知识

- Ajax 是一种技术统称。Fetch,原生 API,用于网络请求，支持 promise。
- em 相对当前元素的 fontSize,rem 是相对于根元素的 fontSize。
- vmin 取 vw 和 vh 的最小值，vmax 取 vw 和 vh 的最大值
- 箭头函数没有 this 和 arguments。不适用于对象方法和原型方法，不适用构造函数
- TCP 三次握手和四次挥手。

  > 第一次握手成功让服务端知道了客户端具有发送能力，第二次握手成功让客户端知道了服务端具有接收和发送能力，但此时服务端并不知道客户端是否接收到了自己发送的消息，所以第三次握手就起到了这个作用。经过三次通信后，服务端和客户端都确认了双方的接收和发送能力。

  > 四次挥手。第一次挥手，客户端告诉服务端，请求发完了，第二次，服务端应答客户端我知道你没有请求了。第三次，等数据传输完毕，服务包告诉客户端文件传输完了。第四次，客户端告诉服务端，可以关闭。