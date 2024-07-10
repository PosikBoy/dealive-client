export default function formatDate(dateString: string): string {
  const dateObj = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };

  return dateObj.toLocaleString("ru-RU", options);
}
