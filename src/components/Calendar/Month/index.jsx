import React, {Component} from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import {format, add, getWeeksInMonth, getDaysInMonth} from 'date-fns';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const getWeeks = ({date, currentDate}) => {
    return eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    }).map((weekDate) => (
    <Week key={weekDate} weekDate={weekDate} date={date} currentDate={currentDate} />
    ));
};

const Month = (props) => {
    const {date} = props;
    const className = classNames(styles.cell, styles.dayName);
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>{format(date, 'LLLL y')}</div>
            <ul className="headRow">
                <li className={className}>s</li>
                <li className={className}>m</li>
                <li className={className}>t</li>
                <li className={className}>w</li>
                <li className={className}>t</li>
                <li className={className}>f</li>
                <li className={className}>s</li>
            </ul>
            {getWeeks(props)}
        </div>
    )
};

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
};
Month.defaultProps = {
    currentDate: new Date(),
};

export default Month;



