import React, {Component} from 'react';
import {format, add, getWeeksInMonth, getDaysInMonth} from 'date-fns';

/*
getWeeks({date, currentDate}){
eachWeekOfInterval(
start: startOfMonth(date)
end: endOfMonth(date)
).map

<Week key={weekDate}
weekDate={weekDate}
date={date}
currentDate={currentDate}
/>
}

const Month = props => {
const {date}=props;
}
*/

const Calendar = ({currentDate}) => {
    return(
        <article>
            <Day currentDate={currentDate} />
            <Month date={currentDate} currentDate={currentDate}/>
        </article>
    );
};
export default Calendar;

