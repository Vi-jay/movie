export const uploadPath = "upload/uploadToCDN";
export const BACKEND_PATH = ((window) => {
  const hostname = window.location.hostname;
  let env = "dev", regexp = /^(.{3,4})-/;
  if (hostname.includes("fulugame") && regexp.test(hostname)) env = RegExp.$1;
  return `//${env}-wechat-game-admin-api.fulugame.cn`
})(window);
