import { Author } from "../components/Courses/components/CourseCard/CourseCard";

export default function getAuthorNames(
    authorIds: string[],
    authorObjects: Author[]
) {
    return authorIds
        .map(
            (authorId) =>
                authorObjects.find((author) => author.id === authorId)?.name
        )
        .filter(Boolean)
        .join(", ");
}
