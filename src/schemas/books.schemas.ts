import { z } from "zod"

export const booksSchemas = z.object({
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.optional(z.string()),
})

export const updateBooksSchemas = z.object({
    name: z.optional(z.string().min(3)),
    pages: z.optional(z.number().min(1)),
    category: z.optional(z.string()),
})