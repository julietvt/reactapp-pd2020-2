import React, {Component} from 'react';
import {format, add, getWeeksInMonth, getDaysInMonth} from 'date-fns';

const Calendar = ({currentDate}) => {
    return(
        <article>
            <Day currentDate={currentDate} />
            <Month date={currentDate} currentDate={currentDate}/>
        </article>
    );
};
export default Calendar;

