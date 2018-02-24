/**
 * 存储sessionStorage
 * */

export const setSessionStore = (name,content) => {
  if(!name) return;
  if(typeof content !== "string"){
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name,content)
}

/**
 * 获取sessionStorage
 * */
export const getSessionStore = (name) => {
  if (!name) return;
  return window.sessionStorage.getItem(name)
}










