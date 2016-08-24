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
 * @date 2016/8/24
 */
/**
 * Created by zhangxinjing on 2016/7/30.
 * /**
 *
 * descprition：app单个组件
 */
import React from 'react';
//
import '../css/video.less';
var Video = React.createClass({
    getInitialState(){
        return {
            stateValue:'1',
            tubiaoValue:'',
            inputValue: '57639',
            arrow:'video-main-red',
            tupian:'hou'
        };
    },
    componentDidMount: function() {
        // this.getCommonListData();
        var item = this.props.role;
        var id = item.id;
        var jiantou = item.jiantou;
        this.changeHandle(jiantou);
    },
    //右下角箭头切换
    changeHandle:function (index) {
        //var index = '0';
        switch (index) {
            case '1':
                this.setState({arrow:"video-main-red"});
                break;
            case '0':
                this.setState({arrow:"video-main-ping"});
                break;
            case '-1':
                this.setState({arrow:"video-main-green"});
                break;
        }
    },
    render:function () {
        var data = this.props.role;
        /*var item = this.porps.role:
         var id = item.id;
         var tupian = item.tupian;
         var name = item.name;
         var number = item.number;
         var jiantou = item.jiantou;*/
        //var data = {id :'01',tupian:'u4070.png',name:'父亲的身份',number:'222222',jiantou:'1'};
        var chart ="/src/images/"+data.tupian;
        var name = data.name;
        var chart2 ="/demo/images/u4077.png";
        return(
            <div className="video">
                <div className="video-main">
                    <img className="video-main-img" src={chart}/>
                    <input disabled="disabled" className="video-main-sort" value={data.id}/>
                    <input disabled="disabled" className="video-main-name" value={data.name}/>
                    <input disabled="disabled"className="video-main-use" src={chart2}/>
                    <input disabled="disabled" className="video-main-usenumber" value={data.number}/>
                    <input disabled="disabled" className={this.state.arrow} change={this.changeHandle}/>
                </div>
            </div>

        )
    }
});
export default Video;

