/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author zhangxinjing
 * @date 2016/9/1
 */
import React from 'react';
import '../css/movescroll.less'
var MoveScroll= React.createClass({
    render() {
        var data=this.props.role;
        var chart ="/demo/images/scroll/"+data.chart;
        var bar="/demo/images/scroll/"+data.bar;
        var jiantou="/demo/images/scroll/"+data.jiantou;
        return (
            <div id="scroll">
                <img className="money" src={chart}/>
                <input disabled="disabled" className="movename" value={data.movename} />
                <input disabled="disabled" className="numone" value={data.numone} />
                <input disabled="disabled" className="numtwo" value={data.numtwo} />
                <input disabled="disabled" className="numpersent" value={data.numpersent} />
                <img className="index" jiantou={jiantou}/>
                <img className="bar" src={bar}/>
            </div>
        )
    }
});
export default MoveScroll;