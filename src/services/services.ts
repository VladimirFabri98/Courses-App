import { apiUrl } from "@/constants";
import {
    Author,
    BackEndResponse,
    BackEndResponseSingular,
    Course,
    User,
} from "@/types";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

async function getApiResponse<T = object | object[]>(
    path: string,
    method?: Methods,
    authToken?: string,
    body?: BodyInit
): Promise<T> {
    const options = method
        ? {
              method,
              headers: {
                  "Content-Type": "application/json",
                  Authorization: authToken ?? "",
              },
              body: body ?? null,
          }
        : undefined;

    const response = await fetch(`${apiUrl}/${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return (text ? JSON.parse(text) : {}) as T;
}

export const getCourses = () =>
    getApiResponse<BackEndResponse<Course>>("courses/all");
export const getAuthors = () =>
    getApiResponse<BackEndResponse<Author>>("authors/all");
export const getCurrentUser = (authToken: string) =>
    getApiResponse<BackEndResponseSingular<User>>(`users/me`, "GET", authToken);

export const addCourse = (authToken: string, body: BodyInit) =>
    getApiResponse<BackEndResponse<Course>>(
        "courses/add",
        "POST",
        authToken,
        body
    );
export const updateCourse = (authToken: string, body: BodyInit, id: string) =>
    getApiResponse<BackEndResponse<Course>>(
        `courses/${id}`,
        "PUT",
        authToken,
        body
    );
export const addAuthor = (authToken: string, body: BodyInit) =>
    getApiResponse<BackEndResponse<Author>>(
        "authors/add",
        "POST",
        authToken,
        body
    );
export const deleteCourse = (authToken: string, id: string) =>
    getApiResponse<BackEndResponse<string>>(
        `courses/${id}`,
        "DELETE",
        authToken
    );
export const logout = (authToken: string) =>
    getApiResponse<BackEndResponse<string>>(`logout`, "DELETE", authToken);
