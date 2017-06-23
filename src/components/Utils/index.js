const Mobile = navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/Windows Phone/i) ||
  navigator.userAgent.match(/MeeGo/i) ||
  navigator.userAgent.match(/BB10/i)
  ? true
  : false

const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
const YTSrc = id => `https://www.youtube.com/embed/${id}`

export { Mobile, YTImg, YTSrc }
