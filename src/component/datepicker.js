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
 * @author liutong
 * @date 2016/8/16
 */
import React from 'react';
import moment from 'moment';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Calendar from './calendar.js';
import CalendarMonth from './calendarMonth.js';

class DatePicker extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: '_ws_datepicker_id' + (Math.random() + '').slice(2),
            nowDate:moment(),
            date: moment(),
            sel:true,
            selInput:false,
            active:true,
        };
        this.handleSelect = ::this.handleSelect;
        this.handleChange = ::this.handleChange;
    }

    ProvList() {
        this.setState({active:!this.state.active});
    }

    /*componentDidMount: function() {
     this.getCommonListData();
     }*/

    selectDay(){
        this.setState({sel:true,date:this.state.nowDate,});
    }

    selectMonth(){
        this.setState({sel:false,date:this.state.nowDate,});
    }

    renderPopover() {
        return (
                <Calendar selected={this.state.date} onSelect={this.handleSelect}/>
        );
    }

    renderPopoverMonth(){
        return (
                <CalendarMonth selected={this.state.date} onSelect={this.handleSelect}/>
        );
    }
    handleSelect(date) {
        this.setState({date:date,active:!this.state.active});
        /*       debugger;*/
    }


    handleChange(event) {
        // 只允许合法的指传递出去
        if (/\d\d\d\d-\d\d-\d\d/.test(event.target.value)) {
            console.log('ssssssssssssssssssssssssssssssss');
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

    clickInput(){
        if(document.getElementById("ws-calendar-div")!=undefined){
            this.setState({selInput:false,});
        }
        else{
            this.setState({selInput:true,});
        }

    }
    render(){
        return (
            <div className="ws-datepicker-outer-div">
                <div className={"ws-datepicker-decide-day"+(this.state.sel?'':'-change')} onClick={this.selectDay.bind(this)}>日
                </div>
                <div className={"ws-datepicker-decide-month"+(this.state.sel?'':'-change')} onClick={this.selectMonth.bind(this)}>月
                </div>

                <div className="ws-datepicker-dateDiv">
                    <span className="ws-datepicker-dateFont">日期</span>
                </div>
                <div className="ws-datepicker-input">
                    <img className="ws-datepicker-img1" src={"/src/images/"+(this.state.active?'u271.png':'u284.png')}/>
                    <div className="ws-datepicker-inputDiv">
                        <span className={"ws-datepicker-selected"+(this.state.active?'':'-change')}>
                            {this.state.sel?
                            this.state.date && moment(this.state.date).format('YYYY-MM-DD'):
                            this.state.date && moment(this.state.date).format('YYYY-MM')}

                        </span>
                    </div>
                </div>
                <div className="ws-datepicker-pull">
                    <img className="ws-datepicker-img2" src={"/src/images/"+(this.state.active?'u273.png':'u352.png')} onClick={this.ProvList.bind(this)}/>
                </div>
                <div className={"ws-datepicker-context"+(this.state.active?'':'-change')}>
                    <span onChange={this.state.sel?this.handleChange:this.handleChangeMonth}>
                        {this.state.sel?this.renderPopover():this.renderPopoverMonth()}
                    </span>
                </div>
            </div>
        );
    }
};
export default DatePicker;
