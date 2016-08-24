import React, {PropTypes} from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';


class DatePicker extends React.Component {
    static propTypes = {
        date: PropTypes.object,
        onChange: PropTypes.func.isRequired,
        inputClassName: PropTypes.string,
        target: PropTypes.func,
        placeholder: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2),
            date: moment()
        };
        this.handleSelect = ::this.handleSelect;
        this.handleChange = ::this.handleChange;
    }

    renderPopover() {

        return (
            <Popover id={this.state.id} className="ws-datepicker-popover">
                <Calendar selected={this.state.date} onSelect={this.handleSelect}/>
            </Popover>


        );
    }

    handleSelect(date) {
        console.log('this is this.date'+this.state.date);
        console.log('this is the date'+date);
        if (this.refs.target) {
            this.refs.target.click();
        } else {
            this.props.target().click();
        }
        this.setState({date:date});
        /*       debugger;*/
    }

    handleChange(event) {
        console.log(event);
        this.props.onChange(date);
    }

    handleChange(event) {
        console.log("this is the date"+event.target.value);
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            this.props.onChange(moment(event.target.value).toDate());
        } else {
            this.onChange(null);
        }
    }

    render() {
        return (
            <div className="ws-datepicker">
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.renderPopover()}>
                    {this.props.children ? this.props.children :
                        <input type="text" className={this.props.inputClassName} placeholder={this.props.placeholder}
                               ref="target"
                               value={this.state.date && moment(this.state.date).format('YYYY-MM-DD')}
                               onChange={this.handleChange}/>}

                </OverlayTrigger>
            </div>
        );
    }
}

module.exports = DatePicker;