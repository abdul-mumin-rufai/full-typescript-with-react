import z from "zod";
const url = 'https://www.course-api.com/react-tours-project';

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

import axios from "axios";

export const fetchData = async(): Promise<ApiData[]> => {
    const response = await axios.get(url);
    const result = apiDataSchema.array().safeParse(response.data);
    if (!result.success) {
        throw new Error('Failed parsing data');
    };
    return result.data;
 };