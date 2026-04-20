import z from "zod";

export const apiDataSchema = z.object({
    id: z.string(),
    price:z.string(),
    info:z.string(),
    image:z.string(),
    name: z.string(),
    //mm:z.string(),
});

//export interface ApiData = z.infer<typeof apiDataSchema>; interface can not be used to infer the type of zod

export type ApiData = z.infer<typeof apiDataSchema>;