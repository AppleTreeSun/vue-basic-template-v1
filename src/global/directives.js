

// 全局自定义指令防止多次点击
export const preventClick = (app, options) => {
  app.directive('prevent-click', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        el.style.pointerEvents = 'none'
        setTimeout(() => {
          el.style.pointerEvents = 'auto'
        }, binding.value || options.wait || 300)
      })
    }
  })
}
