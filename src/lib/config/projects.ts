import type { Project } from "./project.types";
import { DiscordJs, Graphql, Nodejs, OpenAI, Postgresql, Prisma, Railway, Supabase, Svelte, Tailwindcss, Typescript } from "./skills";

export const Projects: Project[] = [
  {
    title: "Linkfy",
    description: "Outil pour créer des liens raccourcis vers des sites web, totalement gratuit et open source",
    skills: [
      Typescript, Svelte, Supabase, Postgresql, Prisma
    ],
    date: { start: "15/01/2023" },
    link: "https://github.com/Steellgold/Linkfy",
    type: "Open Source"
  },
  {
    title: "Royaume",
    description: "Communauté de développeurs où chacun contribue aux projets internes",
    skills: [
      Typescript, Graphql, DiscordJs, Nodejs
    ],
    date: { start: "23/06/2022" },
    link: "https://github.com/Virtual-Royaume",
    type: "Open Source"
  },
  {
    title: "GPT",
    description: "Un bot Discord permettant aux utilisateurs de poser des questions à ChatGPT",
    skills: [
      Typescript, DiscordJs, OpenAI, Prisma, Postgresql
    ],
    date: { start: "19/02/2023" },
    link: "https://github.com/Steellgold/GPT",
    type: "Open Source"
  },
  {
    title: "Site internet",
    description: "Mon portfolio, mon site web, mon CV, mon blog, mon tout",
    skills: [
      Typescript, Svelte, Tailwindcss, Postgresql, Prisma
    ],
    date: { start: "18/08/2022" },
    link: "https://github.com/Steellgold/Portfolio",
    type: "Open Source"
  }
  // For more projects, add them here
];