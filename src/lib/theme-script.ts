// Runs before first paint so the page never flashes the wrong theme.
// Saved choice wins; otherwise follow the device setting (and keep following it).
export const themeScript = `(function(){
  var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");
  function saved(){try{return localStorage.getItem("tv-theme")}catch(e){return null}}
  function apply(){var s=saved();d.setAttribute("data-theme",s==="dark"||s==="light"?s:(m.matches?"dark":"light"))}
  apply();
  m.addEventListener("change",apply);
})();`;
