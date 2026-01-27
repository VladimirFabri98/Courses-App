export function getCourseDuration(duration: number): string {
    if (!duration) return "";
    let hours: string | number = Math.trunc(duration / 60);
    let minutes: string | number = Math.trunc(duration % 60);

    hours < 10 ? (hours = "0" + hours) : hours;
    minutes === 0 ? "" : minutes < 10 ? (minutes = "0" + minutes) : minutes;
    return `${hours}${minutes === 0 ? "" : `:${minutes}`}`;
}
