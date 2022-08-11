export function formatDate(dateStr) {
  let d = new Date(dateStr);
  return (
    days[d.getDay()] +
    ' ' +
    d.getDate() +
    ' ' +
    months[d.getMonth()] +
    ' ' +
    d.getFullYear()
  );
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatTime(dateStr) {
  let t = new Date(dateStr);
  return (
    t.getHours() + ':' + ('0' + t.getMinutes()).slice(-2)
  );
}
