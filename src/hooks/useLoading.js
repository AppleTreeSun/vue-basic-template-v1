import { ElLoading } from 'element-plus';
import { nextTick } from 'vue';

/**
 * 加载loading
 * @param target {string} 用于接收class或id的字符串，
 *  用于确定loading在哪个容器上展示 eg: '.warp' '#app'，不传会默认body
 * @param options {Object=} loading的配置参数，参考element-plus文档
 * @returns {{endLoading: (function(): void), startLoading: (function(): void)}}
 */
export function useLoading(target, options) {
  const defaultOptions = {
    target: target,
    fullscreen: false,
    text: '加载中...',
    background: 'rgba(255, 255, 255, 0.7)'
  }

  let loading;
  const startLoading = async () => {
    await nextTick();
    loading = ElLoading.service({ ...defaultOptions, ...options });
  }
  const endLoading = () => {
    loading || console.warn('endLoading需在startLoading函数之后调用');
    loading && loading.close();
  }
  return {
    startLoading,
    endLoading
  }
}
