import {
  endOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';

export const getDatesOfTheMonth = (date: Date) => {
  const startDate = startOfWeek(startOfMonth(date));
  const endDate = endOfWeek(endOfMonth(date));
  const days = [];
  let currentDay = startDate;

  while (currentDay <= endDate) {
    days.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return days;
};
