import React from 'react';
import { startOfWeek, addDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';

function Days({ currentMonth }) {
  const dateFormat = 'eeee';
  const days = [];

  let startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat, { locale: fr })}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
}

export default Days;
