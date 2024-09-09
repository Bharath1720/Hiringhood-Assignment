export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdays[date.getDay()];
};

export const getUniqueDates = (data) => {
  const dateSet = new Set();
  return data.filter((item) => {
    const date = formatDate(item.dt_txt);
    if (!dateSet.has(date)) {
      dateSet.add(date);
      return true;
    }
    return false;
  });
};

export const getNextFiveDaysData = (data) => {
  const uniqueDates = getUniqueDates(data);
  const today = new Date();
  const todayDateString = formatDate(today.toISOString());
  const futureDates = uniqueDates.filter(
    (item) => formatDate(item.dt_txt) !== todayDateString
  );
  return futureDates.slice(0, 5);
};
