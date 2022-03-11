import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Days from './Days';
import Cells from './Cells';
import Header from './Header';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      <Header prevMonth={prevMonth} currentMonth={currentMonth} nextMonth={nextMonth} />
      <Days currentMonth={currentMonth} />
      <Cells currentMonth={currentMonth} onDateClick={onDateClick} selectedDate={selectedDate} />
    </div>
  );
}

export default Calendar;
