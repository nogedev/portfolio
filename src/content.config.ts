import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    year: z.number().int().optional(),
    heroImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    client: z.string().optional(),
    industry: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { works };
