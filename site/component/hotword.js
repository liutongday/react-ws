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
 * @date 2016/8/23
 */
import React from 'react';
//
import '../css/hotword.less';
var HotWord = React.createClass({
    getInitialState(){
        return null;
    },
    /*componentDidMount: function() {
        // this.getCommonListData();
        var item = this.props.role;
        var id = item.id;
        var jiantou = item.jiantou;
        this.changeHandle(jiantou);
        this.changeTupian(id);
    },*/
    render:function () {
        //var data = this.props.role;
        var data = {one :'1',two:'u797.png',three:'微信',four:'222222',five:'1',six:'1',seven:'1',eight:'第八个',nine:'1',ten:'1'};
        return(
            <div className="hotword">
                <div className="hotword-background1">
                    <div className="hotword-background2">
                        <input disabled="disabled" className="keyword-one"value={data.one}/>
                        <input disabled="disabled" className="keyword-two" value={data.two}/>
                        <input disabled="disabled" className="keyword-three" value={data.three}/>
                        <input disabled="disabled" className="keyword-four" value={data.four}/>
                        <input disabled="disabled" className="keyword-five" value={data.five}/>
                        <input disabled="disabled" className="keyword-six" value={data.six}/>
                        <input disabled="disabled" className="keyword-seven" value={data.seven}/>
                        <input disabled="disabled" className="keyword-eight" value={data.eight}/>
                        <input disabled="disabled" className="keyword-nine" value={data.nine}/>
                        <input disabled="disabled" className="keyword-ten" value={data.ten}/>
                    </div>
                </div>
            </div>

        )
    }
});
export default HotWord;

