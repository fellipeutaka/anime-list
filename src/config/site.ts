export const siteConfig = {
  name: "Anime List",
  description:
    "A simple anime list app built with React, TypeScript, and Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/fellipeutaka",
    github: "https://github.com/fellipeutaka/anime-list",
  },
} as const;

export type SiteConfig = typeof siteConfig;
