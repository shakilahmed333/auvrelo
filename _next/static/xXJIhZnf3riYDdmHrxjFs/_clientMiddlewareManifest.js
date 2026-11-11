self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/auvrelo(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/auvrelo(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|admin|design-system|uploads|media|_next|favicon.ico|robots.txt|sitemap.xml).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|admin|design-system|uploads|media|_next|favicon.ico|robots.txt|sitemap.xml).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()