import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';
import CalendarMonth from './calendarMonth.js';



class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2),
            nowDate:moment(),
            date: moment(),
            sel:true,
        };
        this.handleSelect = ::this.handleSelect;
        this.handleChange = ::this.handleChange;
    }

    selectDay(){
        this.setState({sel:true,date:this.state.nowDate,});
    }

    selectMonth(){
        this.setState({sel:false,date:this.state.nowDate,});
    }

    renderPopover() {
        return (
            <Popover id={this.state.id} className="ws-datepicker-popover">
                <Calendar selected={this.state.date} onSelect={this.handleSelect}/>
            </Popover>
        );
    }

    renderPopoverMonth(){
        return (
            <Popover id={this.state.id} className="ws-datepicker-popover">
                <CalendarMonth selected={this.state.date} onSelect={this.handleSelect}/>
            </Popover>
        );
    }
    handleSelect (date) {
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
        this.setState({date:date});
        /*       debugger;*/
    }


    handleChange(event) {
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.props.onChange(null);
        }
    }

    handleChangeMonth(event) {
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.onChange(null);
        }
    }

    render() {
        return (
            <div className="ws-datepicker">
                <div className={"ws-datepicker-decide-day"+(this.state.sel?'':'-change')} onClick={this.selectDay.bind(this)}>日
                </div>
                <div className={"ws-datepicker-decide-month"+(this.state.sel?'':'-change')} onClick={this.selectMonth.bind(this)}>月
                </div>
                <div className="ws-datepicker-dateDiv">
                    <p className="ws-datepicker-dateFont">日期</p>
                </div>
                <div className="ws-datepicker-input">
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.state.sel?this.renderPopover():this.renderPopoverMonth()}>
                        {this.state.sel ?
                            <input type="text" className="ws-datepicker-date"
                                   ref="target"
                                   value={this.state.date && moment(this.state.date).format('YYYY-MM-DD')}
                                   onChange={this.handleChange}/>:
                            <input type="text" className="ws-datepicker-date"
                                   ref="target"
                                   value={this.state.date && moment(this.state.date).format('YYYY-MM')}
                                   onChange={this.handleChangeMonth}/>}
                    </OverlayTrigger>
                </div>
            </div>
        );
    }
}


export default DatePicker;