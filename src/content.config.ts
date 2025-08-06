import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(300, "Description is too long. Max 300 characters allowed."),
    stack: z.array(z.string()),
    year: z.number().int().optional(),
    heroImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    about: z.string().optional(),
    challenge: z.string().optional(),
    result: z.string().optional(),
    client: z.string().optional(),
    repoUrl: z.string().url().optional(),
    websiteUrl: z.string().url().optional(),
    industry: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const about = defineCollection({
  schema: z.object({
    introText: z.string(),
    imageWithText: z
      .object({
        imageUrl: z.string(),
        text: z.string(),
      })
      .optional(),
    services: z.array(z.string()).optional(),
    stack: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { works, about };
