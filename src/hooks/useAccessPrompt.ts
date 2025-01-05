export const useAccessPrompt = () => {
  // 3秒后获取用户浏览器权限
  setTimeout(() => {
    window['$notification'].create({
      title: '友情提示',
      content: '本站仅用于学习、交流之用，请勿进行非法操作、上传或发布违法资讯。',
      duration: 30000
    })
  }, 3000)
}
