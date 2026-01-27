export function formatCreationDate(date: string): string | null {
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
