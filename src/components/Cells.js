import React from 'react';
import { startOfMonth, endOfMonth, endOfWeek, format, isSameMonth, parse, addDays, startOfWeek, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';

function Cells({ currentMonth, selectedDate, onDateClick }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = 'd';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat, { locale: fr });
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : ''}`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
}

export default Cells;
