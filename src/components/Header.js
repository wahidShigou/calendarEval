import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function Header({ prevMonth, currentMonth, nextMonth }) {
  const dateFormat = 'MMMM yyyy';

  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>{format(currentMonth, dateFormat, { locale: fr })}</span>
      </div>
      <div className="col col-end" onClick={nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
}

export default Header;
