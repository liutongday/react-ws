/**
 *
 * Title: BONC - React
 *
 * Description:  </p>
 *
 * Copyright: Copyright BONC(c) 2013 - 2025
 *
 * Company: 北京东方国信科技股份有限公司
 *
 * @author luli
 * @date 2016/8/22
 */
import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';

var DatePicker = React.createClass({
    propTypes: {
        date: React.PropTypes.object,
        onChange: React.PropTypes.func.isRequired,
        inputClassName: React.PropTypes.string,
        target: React.PropTypes.func,
        placeholder: React.PropTypes.string
    },
    getInitialState: function () {
        return {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2)
        };
    },
    renderPopover: function () {
        return (
            <Popover id={this.state.id} className="ws-datepicker-popover">
                <Calendar selected={this.props.date} onSelect={this.handleSelect}></Calendar>
            </Popover>
        );
    },
    handleSelect: function (date) {
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
        this.onChange(date);
    },
    handleChange: function (event) {
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.props.onChange(null);
        }
    },
    render: function () {
        return (
            <div className="ws-datepicker">
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

export default DatePicker;