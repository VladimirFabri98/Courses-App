import { apiUrl } from "@/constants";
import { Author, BackEndResponse, Course } from "@/types";

async function getApiResponse<T = object | object[]>(path: string): Promise<T> {
    const response = await fetch(`${apiUrl}/${path}`);
    return (await response.json()) as T;
}

export const getCourses = () =>
    getApiResponse<BackEndResponse<Course>>("courses/all");
export const getAuthors = () =>
    getApiResponse<BackEndResponse<Author>>("authors/all");
