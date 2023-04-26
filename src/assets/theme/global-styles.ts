import { css } from "@emotion/react";

export const global = css`
  * {
    font-family: "SUIT" !important;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "SUIT", sans-serif;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    src: local("Spoqa Han Sans Neo Bold"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    src: local("Spoqa Han Sans Neo Medium"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 400;
    src: local("Spoqa Han Sans Neo Regular"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 300;
    src: local("Spoqa Han Sans Neo Light"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans Neo";
    font-weight: 100;
    src: local("Spoqa Han Sans Neo Thin"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf")
        format("truetype");
  }
`;
