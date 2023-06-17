// 封装缓存工具
import CONFIG from '@/global/config';

class HrCache {

  constructor(namespace = 'DEMO', isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
    this.namespace = namespace
  }

  getStroage() {
    return JSON.parse(this.storage.getItem(this.namespace) || '{}')
  }

  setItem(key, value) {
    if (!value) return

    let stroage = this.getStroage()
    stroage[key] = value
    this.storage.setItem(this.namespace, JSON.stringify(stroage));
  }

  getItem(key) {
    return this.getStroage()[key]
  }

  removeItem(key) {
    let storage = this.getStroage()
    delete storage[key]

    if (!Object.keys(storage).length) this.clear()
    else this.storage.setItem(this.namespace, JSON.stringify(stroage));
  }

  clear() {
    this.storage.removeItem(this.namespace)
  }
}

const localCache = new HrCache(CONFIG.APP_KEY);
const sessionCache = new HrCache(CONFIG.APP_KEY, false)

export { localCache, sessionCache };
