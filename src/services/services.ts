import { apiUrl } from "@/constants";

export async function getCourses() {
    const response = await fetch(`${apiUrl}/courses/all`);
    return await response.json();
}

export async function getAuthors() {
    const response = await fetch(`${apiUrl}/authors/all`);
    return await response.json();
}
