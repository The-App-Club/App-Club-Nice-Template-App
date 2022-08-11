function pluralize(number, label) {
  if (!number) number = 0;
  return number === 1
    ? number + label
    : number + label + 's';
}

// https://github.com/yysun/apprun-hn/blob/master/src/app.tsx#L137
function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function formatDate(dateStr) {
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

function formatTime(dateStr) {
  let t = new Date(dateStr);
  return (
    t.getHours() + ':' + ('0' + t.getMinutes()).slice(-2)
  );
}

export { timeAgo, formatDate, formatTime };
