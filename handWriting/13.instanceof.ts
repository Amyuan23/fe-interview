/**
 * 手写 instanceof
 * @param instance
 * @param origin
 */
function myInstanceof(instance: any, origin: any): boolean {
  if (instance == null) return false
  if (typeof instance !== 'object' && typeof instance !== 'function') return false

  let tempInstance = instance

  while (tempInstance) {
    if (instance.__proto__ === origin.prototype) {
      return true
    }
    tempInstance = instance.__proto__
  }

  return false
}
