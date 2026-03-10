function getCourseDuration(duration: number): string {
    if (!duration && duration !== 0) return "";
    let hours: string | number = Math.trunc(duration / 60);
    let minutes: string | number = Math.trunc(duration % 60);
    const singularOrPlural = hours !== 1 ? "hours" : "hour";

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    const finalString = `${hours}:${minutes} ${singularOrPlural}`;
    return finalString;
}

export default getCourseDuration;
