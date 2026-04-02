export default function formatDate(daysOffset = 0) {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}
