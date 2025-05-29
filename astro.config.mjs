import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});




// https://astro.build/config
export default defineConfig({
  site: "https://tiktokio.cam",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  output: "hybrid",
  integrations: [tailwind(), sitemap(), astroI18next(), alpinejs(), sitemap({
      filter: (page) =>
page !== 'https://tiktokio.cam/animated/' &&   
page !== 'https://tiktokio.cam/animated/' &&
page !== 'https://tiktokio.cam/blog/category/ai%20and%20ml/' &&
page !== 'https://tiktokio.cam/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/blog/category/marketing/' &&
page !== 'https://tiktokio.cam/blog/category/tech/' &&
page !== 'https://tiktokio.cam/blog/category/tutorials/' &&
page !== 'https://tiktokio.cam/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/blog/tag/advertising/' &&
page !== 'https://tiktokio.cam/blog/tag/ai/' &&
page !== 'https://tiktokio.cam/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/blog/tag/astro/' &&
page !== 'https://tiktokio.cam/blog/tag/chatbots/' &&
page !== 'https://tiktokio.cam/blog/tag/decapcms/' &&
page !== 'https://tiktokio.cam/blog/tag/frontend/' &&
page !== 'https://tiktokio.cam/blog/tag/machinelearning/' &&
page !== 'https://tiktokio.cam/blog/tag/socialmedia/' &&
page !== 'https://tiktokio.cam/blog/tag/tailwindcss/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok%20video%20downloader%20without%20watermark/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktokio/' &&
page !== 'https://tiktokio.cam/blog/tag/webdev/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/de/animated/' &&
page !== 'https://tiktokio.cam/de/login/' &&
page !== 'https://tiktokio.cam/es/animated/' &&
page !== 'https://tiktokio.cam/es/login/' &&
page !== 'https://tiktokio.cam/es/pricing/' &&
page !== 'https://tiktokio.cam/fr/animated/' &&
page !== 'https://tiktokio.cam/fr/login/' &&
page !== 'https://tiktokio.cam/fr/pricing/' &&
page !== 'https://tiktokio.cam/hi/animated/' &&
page !== 'https://tiktokio.cam/hi/login/' &&
page !== 'https://tiktokio.cam/hi/pricing/' &&
page !== 'https://tiktokio.cam/id/animated/' &&
page !== 'https://tiktokio.cam/id/login/' &&
page !== 'https://tiktokio.cam/id/pricing/' &&
page !== 'https://tiktokio.cam/it/animated/' &&
page !== 'https://tiktokio.cam/it/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/it/blog/category/ia%20e%20ml/' &&
page !== 'https://tiktokio.cam/it/blog/category/marketing/' &&
page !== 'https://tiktokio.cam/it/blog/category/tutorials/' &&
page !== 'https://tiktokio.cam/it/blog/harnessing-the-power-of-tiktok/' &&
page !== 'https://tiktokio.cam/it/blog/introducing-decap-cms-your-go-to-solution-for-content-management/' &&
page !== 'https://tiktokio.cam/it/blog/introduction-to-astro-a-new-front-end-framework/' &&
page !== 'https://tiktokio.cam/it/blog/simplifying-front-end-interactivity-with-alpine-js/' &&
page !== 'https://tiktokio.cam/it/blog/tag/advertising/' &&
page !== 'https://tiktokio.cam/it/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/it/blog/tag/apprendimentoautomatico/' &&
page !== 'https://tiktokio.cam/it/blog/tag/astro/' &&
page !== 'https://tiktokio.cam/it/blog/tag/chatbot/' &&
page !== 'https://tiktokio.cam/it/blog/tag/decapcms/' &&
page !== 'https://tiktokio.cam/it/blog/tag/frontend/' &&
page !== 'https://tiktokio.cam/it/blog/tag/ia/' &&
page !== 'https://tiktokio.cam/it/blog/tag/socialmedia/' &&
page !== 'https://tiktokio.cam/it/blog/tag/tailwindcss/' &&
page !== 'https://tiktokio.cam/it/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/it/blog/tag/webdev/' &&
page !== 'https://tiktokio.cam/it/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/it/blog/the-power-and-potential-of-chatgpt/' &&
page !== 'https://tiktokio.cam/it/blog/unleashing-the-power-of-tailwind-css/' &&
page !== 'https://tiktokio.cam/it/login/' &&
page !== 'https://tiktokio.cam/it/pricing/' &&
page !== 'https://tiktokio.cam/ko/animated/' &&
page !== 'https://tiktokio.cam/ko/login/' &&
page !== 'https://tiktokio.cam/ko/pricing/' &&
page !== 'https://tiktokio.cam/login/' &&
page !== 'https://tiktokio.cam/ms/animated/' &&
page !== 'https://tiktokio.cam/ms/login/' &&
page !== 'https://tiktokio.cam/ms/pricing/' &&
page !== 'https://tiktokio.cam/nl/animated/' &&
page !== 'https://tiktokio.cam/nl/login/' &&
page !== 'https://tiktokio.cam/nl/pricing/' &&
page !== 'https://tiktokio.cam/pricing/' &&
page !== 'https://tiktokio.cam/pt/animated/' &&
page !== 'https://tiktokio.cam/pt/login/' &&
page !== 'https://tiktokio.cam/pt/pricing/' &&
page !== 'https://tiktokio.cam/ru/animated/' &&
page !== 'https://tiktokio.cam/ru/login/' &&
page !== 'https://tiktokio.cam/ru/pricing/' &&
page !== 'https://tiktokio.cam/tl/animated/' &&
page !== 'https://tiktokio.cam/tl/login/' &&
page !== 'https://tiktokio.cam/tl/pricing/' &&
page !== 'https://tiktokio.cam/tr/animated/' &&
page !== 'https://tiktokio.cam/ar/animated/' &&
page !== 'https://tiktokio.cam/tr/login/' &&
page !== 'https://tiktokio.cam/ar/login/' &&
page !== 'https://tiktokio.cam/tr/pricing/' &&
page !== 'https://tiktokio.cam/de/pricing/' &&

page !== 'https://tiktokio.cam/ar/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/de/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/es/contact-us/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/ru/animated/ ' &&
page !== 'https://tiktokio.cam/ru/animated/ ' &&
page !== 'https://tiktokio.cam/pt/animated/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/id/animated/ ' &&
page !== 'https://tiktokio.cam/ms/animated/ ' &&
page !== 'https://tiktokio.cam/tr/animated/ ' &&
page !== 'https://tiktokio.cam/ko/animated/ ' &&
page !== 'https://tiktokio.cam/tiktok-story-/ ' &&
page !== 'https://tiktokio.cam/login/ ' &&
page !== 'https://tiktokio.cam/4/ ' &&
page !== 'https://tiktokio.cam/qhqzf/ ' &&
page !== 'https://tiktokio.cam/5/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ru/login/ ' &&
page !== 'https://tiktokio.cam/ms/login/ ' &&
page !== 'https://tiktokio.cam/nl/login/ ' &&
page !== 'https://tiktokio.cam/pt/login/ ' &&
page !== 'https://tiktokio.cam/pt/login/ ' &&
page !== 'https://tiktokio.cam/id/login/ ' &&
page !== 'https://tiktokio.cam/id/login/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/es/login/ ' &&
page !== 'https://tiktokio.cam/es/login/ ' &&
page !== 'https://tiktokio.cam/hi/login/ ' &&
page !== 'https://tiktokio.cam/hi/login/ ' &&
page !== 'https://tiktokio.cam/ar/login/ ' &&
page !== 'https://tiktokio.cam/pricing/ ' &&
page !== 'https://tiktokio.cam/nl/animated/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ru/pricing/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/animated/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/category/marketing/ ' &&
page !== 'https://tiktokio.cam/fr/pricing/ ' &&
page !== 'https://tiktokio.cam/fr/pricing/ ' &&
page !== 'https://tiktokio.cam/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/de/pricing/ ' &&
page !== 'https://tiktokio.cam/de/pricing/ ' &&
page !== 'https://tiktokio.cam/es/pricing/ ' &&
page !== 'https://tiktokio.cam/es/pricing/ ' &&
page !== 'https://tiktokio.cam/hi/pricing/ ' &&
page !== 'https://tiktokio.cam/hi/pricing/ ' &&
page !== 'https://tiktokio.cam/pricing/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/fr/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/pt/pricing/ ' &&
page !== 'https://tiktokio.cam/tl/pricing/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/tr/pricing/ ' &&
page !== 'https://tiktokio.cam/tr/pricing/ ' &&
page !== 'https://tiktokio.cam/nl/pricing/ ' &&
page !== 'https://tiktokio.cam/nl/pricing/ ' &&
page !== 'https://tiktokio.cam/ar/pricing/ ' &&
page !== 'https://tiktokio.cam/ar/pricing/ ' &&
page !== 'https://tiktokio.cam/id/pricing/ ' &&
page !== 'https://tiktokio.cam/id/pricing/ ' &&
page !== 'https://tiktokio.cam/fr/contact-us/ ' &&
page !== 'https://tiktokio.cam/ko/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/id/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/tl/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/ms/pricing/ ' &&
page !== 'https://tiktokio.cam/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ms/pricing/ ' &&
page !== 'https://tiktokio.cam/ru/pricing/ ' &&
page !== 'https://tiktokio.cam/es/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/es/animated/ ' &&
page !== 'https://tiktokio.cam/es/animated/ ' &&
page !== 'https://tiktokio.cam/de/animated/ ' &&
page !== 'https://tiktokio.cam/ar/animated/ ' &&
page !== 'https://tiktokio.cam/hi/animated/ ' &&
page !== 'https://tiktokio.cam/animated/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/ru/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/de/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/id/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/hi/contact-us/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/hi/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/nl/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/TikTokio/ ' &&
page !== 'https://tiktokio.cam/tl/contact-us/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/fr/login/ ' &&
page !== 'https://tiktokio.cam/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/tl/animated/ ' &&
page !== 'https://tiktokio.cam/de/login/ ' &&
page !== 'https://tiktokio.cam/ko/login/ ' &&
page !== 'https://tiktokio.cam/nl/login/ ' &&
page !== 'https://tiktokio.cam/login/ ' &&
page !== 'https://tiktokio.cam/ms/login/ ' &&
page !== 'https://tiktokio.cam/it/blog/2/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/de/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ru/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/it/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/ar/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/de/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/category/tech/ ' &&
page !== 'https://tiktokio.cam/contact-us/ ' &&
page !== 'https://tiktokio.cam/tr/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/it/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/it/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/tl/blog/2/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/ms/blog/2/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/tiktokio/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/pt/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/ru/blog/2/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/ar/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/id/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/nl/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ko/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/tl/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/tr/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/pt/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/ms/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/it/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ms/contact-us/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/ms/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/ru/blog/how-to-save-tiktok-videos-without-watermark/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/tech/ ' &&
page !== 'https://tiktokio.cam/ar/contact-us/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/tiktok video downloader without watermark/ ' &&
page !== 'https://tiktokio.cam/blog/2/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/de/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/hi/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/de/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/2/ ' &&
page !== 'https://tiktokio.cam/de/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/hi/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/ms/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/de/contact-us/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/ru/contact-us/ ' &&
page !== 'https://tiktokio.cam/nl/contact-us/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/id/contact-us/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/pt/contact-us/ ' &&
page !== 'https://tiktokio.cam/it/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/tr/contact-us/ ' &&
page !== 'https://tiktokio.cam/ko/contact-us/ ' &&
page !== 'https://tiktokio.cam/it/contact-us/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/id/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/ar/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/it/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/it/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/de/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ar/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/pt/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/it/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/hi/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/astro/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/id/blog/2/ ' &&
page !== 'https://tiktokio.cam/it/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/ms/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/fr/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/es/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ko/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/tr/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/tl/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/es/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/es/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/decapcms/ ' &&
page !== 'https://tiktokio.cam/ar/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/nl/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/hi/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/tr/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/tl/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/ru/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/ar/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/id/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/ms/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/hi/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/ar/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/es/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/nl/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/de/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/tiktok/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/socialmedia/ ' &&
page !== 'https://tiktokio.cam/pt/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/ar/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/fr/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/de/blog/2/ ' &&
page !== 'https://tiktokio.cam/ko/blog/2/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/chatbots/ ' &&
page !== 'https://tiktokio.cam/es/blog/2/ ' &&
page !== 'https://tiktokio.cam/tr/blog/2/ ' &&
page !== 'https://tiktokio.cam/pt/blog/2/ ' &&
page !== 'https://tiktokio.cam/nl/blog/2/ ' &&
page !== 'https://tiktokio.cam/it/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/it/category/marketing/ ' &&
page !== 'https://tiktokio.cam/ar/blog/2/ ' &&
page !== 'https://tiktokio.cam/it/category/frameworks/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/nl/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/ms/blog/tag/alpinejs/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/hi/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/de/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/id/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/es/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/fr/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/es/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/marketing/ ' &&
page !== 'https://tiktokio.cam/de/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/ar/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/nl/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/fr/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/ko/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/ar/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/pt/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/ru/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/tr/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/tl/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/ar/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/tr/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/it/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/de/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/fr/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/tr/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/ko/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/ms/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/fr/blog/2/ ' &&
page !== 'https://tiktokio.cam/ru/blog/tag/frontend/ ' &&
page !== 'https://tiktokio.cam/id/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/tr/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/webdev/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/nl/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/ru/blog/unleashing-the-power-of-tailwind-css/ ' &&
page !== 'https://tiktokio.cam/tl/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/ms/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/ru/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/ko/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/nl/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/tl/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/ko/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/es/blog/introduction-to-astro-a-new-front-end-framework/ ' &&
page !== 'https://tiktokio.cam/fr/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/pt/blog/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/ms/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/nl/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/ar/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/hi/blog/simplifying-front-end-interactivity-with-alpine-js/ ' &&
page !== 'https://tiktokio.cam/pt/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/ia/ ' &&
page !== 'https://tiktokio.cam/de/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/id/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/es/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/404/ ' &&
page !== 'https://tiktokio.cam/ko/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/de/blog/introducing-decap-cms-your-go-to-solution-for-content-management/ ' &&
page !== 'https://tiktokio.cam/nl/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/category/tutorials/ ' &&
page !== 'https://tiktokio.cam/pt/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/ms/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/hi/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/ar/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/tr/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/ar/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/category/ai and ml/ ' &&
page !== 'https://tiktokio.cam/id/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/es/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/fr/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/tl/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/tl/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/fr/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/ru/privacy-policy/ ' &&
page !== 'https://tiktokio.cam/tr/terms-of-service/ ' &&
page !== 'https://tiktokio.cam/pt/blog/tag/machinelearning/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/ai/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/tl/blog/tag/chatbot/ ' &&
page !== 'https://tiktokio.cam/hi/blog/tag/tailwindcss/ ' &&
page !== 'https://tiktokio.cam/tr/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/fr/blog/the-power-and-potential-of-chatgpt/ ' &&
page !== 'https://tiktokio.cam/ko/blog/tag/apprendimentoautomatico/ ' &&
page !== 'https://tiktokio.cam/pt/blog/harnessing-the-power-of-tiktok/ ' &&
page !== 'https://tiktokio.cam/id/blog/tag/advertising/ ' &&
page !== 'https://tiktokio.cam/ru/blog/category/ia e ml/ ' &&
page !== 'https://tiktokio.cam/ko/blog/the-power-and-potential-of-chatgpt/ ' &&


        
page !== 'https://tiktokio.cam/ar/pricing/',
    }),



                 
    AstroPWA({
    mode: "production",
    base: "/",
    scope: "/",
    includeAssets: ["favicon.ico"],
    registerType: "autoUpdate",
    manifest: {
      name: "Tiktokio - TikTok Downloader - Download TikTok Videos Without Watermark",
      short_name: "Tikokio",
      theme_color: "#ffffff",
      icons: [{
        src: "pwa-192x192.webp",
        sizes: "192x192",
        type: "image/webp"
      }, {
        src: "pwa-512x512.webp",
        sizes: "512x512",
        type: "image/webp"
      }, {
        src: "pwa-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any maskable"
      }]
    },
    workbox: {
      navigateFallback: "/404",
      globPatterns: ["*.js"]
    },

    redirects: {
    '/404': {
      status: 404,
      destination: '/'
    }
  },

    devOptions: {
      enabled: false,
      navigateFallbackAllowlist: [/^\/404$/],
      suppressWarnings: true
    }
  }), icon(), solidJs()],
  markdown: {
    rehypePlugins: [rehypeSlug,
    // This adds links to headings
    [rehypeAutolinkHeadings, autolinkConfig]]
  },
  experimental: {
    contentCollectionCache: true
  },
  
  adapter: vercel()
});
