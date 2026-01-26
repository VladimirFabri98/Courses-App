import Button from "../../../../common/Button/Button";
import "./CourseCard.css";

type CourseCardProps = {
    title: string;
    description: string;
    author: string;
    duration: number;
    created: string;
};

export default function CourseCard({
    title,
    description,
    author,
    duration,
    created,
}: CourseCardProps) {
    return (
        <li className="card">
            <h3 className="title">{title}</h3>
            <div className="card-content">
                <p className="card-description">{description}</p>
                <div className="info-section">
                    <div className="course-info">
                        <p className="course-author">
                            {" "}
                            <strong>Author</strong>: {author}
                        </p>
                        <p className="course-duration">
                            <strong>Duration</strong>:{" "}
                            {calculateDuration(duration)}{" "}
                            {Math.trunc(duration / 60) === 1 ? "hour" : "hours"}
                        </p>
                        <p className="course-creation-date">
                            <strong>Created</strong>: {formatDate(created)}
                        </p>
                    </div>
                    <Button buttonText="Show Course" />
                </div>
            </div>
        </li>
    );
}

function calculateDuration(duration: number): string {
    let hours: string | number = Math.trunc(duration / 60);
    let minutes: string | number = Math.trunc(duration % 60);

    hours < 10 ? (hours = "0" + hours) : hours;
    minutes === 0 ? "" : minutes < 10 ? (minutes = "0" + minutes) : minutes;
    return `${hours}${minutes === 0 ? "" : `:${minutes}`}`;
}

function formatDate(date: string): String | null {
    const parts = date.split("/");

    if (parts.length !== 3) return null;

    const [dayStr, monthStr, yearStr] = parts;

    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);

    if (
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year)
    ) {
        return null;
    }

    const formattedDate = new Date(year, month - 1, day);

    return formattedDate.toLocaleDateString("sr-RS", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}
