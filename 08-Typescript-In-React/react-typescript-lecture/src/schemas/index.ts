import { z } from "zod/v4";

export const ProductSchema = z.object({
    id: z.number().int(),
    title: z.string().min(1),
    price: z.number().positive(),
    description: z.string().min(1),
    category: z.string().min(1),
    rating: z.object({
        rate: z.number().positive(),
        count: z.number().positive()
    })
})

