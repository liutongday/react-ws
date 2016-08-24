import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';
import CalendarMonth from './calendarMonth.js';

var DatePicker = React.createClass({
    propTypes: {
        date: React.PropTypes.object,
        onChange: React.PropTypes.func.isRequired,
        inputClassName: React.PropTypes.string,
        target: React.PropTypes.func
    },

<<<<<<< HEAD
class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2),
            date: moment(),
            sel:true,
        };
        this.handleSelect = ::this.handleSelect;
        this.handleChange = ::this.handleChange;
    }

    selectDay(){
        this.setState({sel:true,});
    }

    selectMonth(){
        this.setState({sel:false,});
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
=======
    getInitialState: function () {
        return {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2)
        };
    },
    renderPopover: function () {
        return (
            <Popover id={this.state.id} className="ws-datepicker-popover">
                <Calendar selected={this.props.date} onSelect={this.handleSelect}></Calendar>
>>>>>>> origin/zhangxinjing
            </Popover>
        );
    },
    handleSelect: function (date) {
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
<<<<<<< HEAD
        this.setState({date:date});
        /*       debugger;*/
    }


    handleChange(event) {
=======
        this.props.onChange(date);
    },
    handleChange: function (event) {
>>>>>>> origin/zhangxinjing
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.onChange(null);
        }
    },
    render: function () {
        return (
            <div className="ws-datepicker">
<<<<<<< HEAD
                <div className={"ws-datepicker-decide-day"+(this.state.sel?'':'-change')} onClick={this.selectDay.bind(this)}>日
                </div>
                <div className={"ws-datepicker-decide-month"+(this.state.sel?'':'-change')} onClick={this.selectMonth.bind(this)}>月
                </div>
                <div>
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.state.sel?this.renderPopover():this.renderPopoverMonth()}>
                        {this.state.sel ?
                            <input type="text" className="ws-datepicker-date"
                                   ref="target"
                                   value={this.state.date && moment(this.state.date).format('YYYY-MM-DD')}
                                   onChange={this.handleChange}/>:
                            <input type="text" className="ws-datepicker-date"
                            ref="target"
                            value={this.state.date && moment(this.state.date).format('YYYY-MM')}
                            onChange={this.handleChange}/>}
                    </OverlayTrigger>
                </div>
            </div>
        );
    }
}
=======
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text" className={this.props.inputClassName} placeholder={this.props.placeholder}
                               ref="target"
                               value={this.props.date && moment(this.props.date).format('YYYY-MM-DD')}
                               onChange={this.handleChange}/>}
                </OverlayTrigger>
            </div>
        );
    }
});
>>>>>>> origin/zhangxinjing

export default DatePicker;