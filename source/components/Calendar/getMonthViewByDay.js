import getStartOfMonth from "date-fns/start_of_month";
import getStartOfWeek from "date-fns/start_of_week";
import getMonth from "date-fns/get_month";
import addDays from "date-fns/add_days";
import isSameMonth from "date-fns/is_same_month";
import isSameDay from "date-fns/is_same_day";

export default function getMonthViewByDay(day, selected) {
  const items = [];

  const today = new Date();
  const month = getMonth(day);
  const startOfMonth = getStartOfMonth(day);
  const startOfWeek = getStartOfWeek(startOfMonth, { weekStartsOn: 1 });

  for (let i = 0; i < 42; i++) {
    const date = addDays(startOfWeek, i);

    let type = "default";

    if (!isSameMonth(date, day)) {
      type = i < 21 ? "previous" : "next";
    } else {
      if (isSameDay(date, today)) {
        type = "current";

        if (isSameDay(today, selected)) {
          type = "current_selected";
        }
      } else if (isSameDay(date, selected)) {
        type = "selected";
      }
    }
    items.push({ type, date });
  }
  return items;
}
