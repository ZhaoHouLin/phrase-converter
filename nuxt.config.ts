// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "node:path"

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  routeRules: {
    "/": { prerender: true },
    /* 對所有使用的路由執行相同操作 */
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          additionalData: `@import "${path.resolve(
            __dirname,
            "./assets/style.styl"
          )}"`,
        },
      },
    },
  },
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "加密助記詞轉換器",
      meta: [
        {
          name: "description",
          content: "加密助記詞轉換器",
        },
        { property: "og:title", content: "加密助記詞轉換器" },
        { property: "og:url", content: "" },
        {
          property: "og:description",
          content: "加密助記詞轉換器",
        },
      ],
    },
    // layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
})
