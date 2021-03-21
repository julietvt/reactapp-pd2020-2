import React, {Component} from 'react';
import {format, add, getWeeksInMonth, getDaysInMonth} from 'date-fns';

class Calendar extends Component{
    constructor(props){
        super(props);
        this.state = {
            day: new Date()
        };
    }
    changeDay = options => {
        const {day} = this.state;
        const newDate = add(day, options);
        this.setState({day: newDate});
    }
    render(){
        const {day} = this.state;
        return(
            <div>
                <div>{format(day, 'EEEE LLL yy')}</div>
                <div>This month contains {getWeeksInMonth(day)} weeks</div>
                <div>This month contains {getDaysInMonth(day)} days</div>
                <button onClick={() => this.changeDay({days:1})}>Add day</button>
                <button onClick={() => this.changeDay({weeks:1})}>Add week</button>
                <button onClick={() => this.changeDay({years:1})}>Add year</button>
            </div>
        );
    }
}
export default Calendar;

