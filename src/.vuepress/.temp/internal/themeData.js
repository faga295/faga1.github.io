export const themeData = JSON.parse("{\"blog\":{\"name\":\"faga\",\"avatar\":\"https://lzc-personal-resource.oss-cn-beijing.aliyuncs.com/images/typora/微信图片_20220607163536.jpg\",\"medias\":{\"Github\":\"https://github.com/faga1\"}},\"encrypt\":{},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":false,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/blog/\":[\"README.md\",\"remark\",\"react\",\"web_upload_oss\",\"webpack\",\"interview\",\"commonjs&esmodule\"]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\"},\"blogLocales\":{\"article\":\"Articles\",\"articleList\":\"Article List\",\"category\":\"Category\",\"tag\":\"Tag\",\"timeline\":\"Timeline\",\"timelineTitle\":\"Yesterday Once More!\",\"all\":\"All\",\"intro\":\"Personal Intro\",\"star\":\"Star\",\"slides\":\"Slides\",\"encrypt\":\"Encrypted\"},\"paginationLocales\":{\"prev\":\"Prev\",\"next\":\"Next\",\"navigate\":\"Jump to\",\"action\":\"Go\",\"errorText\":\"Please enter a number between 1 and $page !\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"faga\",\"url\":\"http://www.faga.cc\"},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"笔记\",\"link\":\"/blog/\"},{\"text\":\"Github\",\"link\":\"https://github.com/faga1\"}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
