const customDom = {
  tagName: "html",
  lang: "en-US",
  childNodes: {
    0: {
      tagName: "head",
      childNodes: {
        0: { tagName: "meta", charSet: "UTF-8" },
        1: { tagName: "title", textContent: "A sample page" }
      }
    },
    1: {
      tagName: "body",
      childNodes: {
        0: {
          tagName: "div",
          childNodes: {
            0: {
              tagName: "h1",
              className: "headline",
              textContent: "Lorem ipsum"
            },
            1: {
              tagName: "p",
              textContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          }
        },

        1: { tagName: "script" }
      }
    }
  }
};
