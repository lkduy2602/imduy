import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://imduy.id.vn/",
    title: "ImDuy",
    description: "Blog cá nhân của Lê Khánh Duy - Nơi chia sẻ về công nghệ, lập trình và cuộc sống.",
    author: "Lê Khánh Duy",
    profile: "https://imduy.id.vn/about",
    ogImage: "default-og.jpg",
    lang: "vi",
    timezone: "Asia/Ho_Chi_Minh",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/lkduy2602" },
    { name: "linkedin", url: "https://www.linkedin.com/in/lkduy2602/" },
    { name: "mail",     url: "mailto:lkduy2602@gmail.com" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});