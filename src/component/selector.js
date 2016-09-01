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
import '../css/selector.less';
import ReactDOM from 'react-dom';
    var data1=[{proId:"111",proName:"全国"}, {proId:"036",proName:"浙江"}, {proId:"011",proName:"北京"},
        {proId:"031",proName:"上海"}, {proId:"013",proName:"天津"}, {proId:"083",proName:"重庆"},
        {proId:"097",proName:"黑龙江"}, {proId:"090",proName:"吉林"}, {proId:"091",proName:"辽宁"},
        {proId:"010",proName:"内蒙古"}, {proId:"089",proName:"新疆"}, {proId:"087",proName:"甘肃"},
        {proId:"070",proName:"青海"}, {proId:"088",proName:"宁夏"}, {proId:"084",proName:"陕西"},
        {proId:"019",proName:"山西"}, {proId:"017",proName:"山东"}, {proId:"018",proName:"河北"},
        {proId:"076",proName:"河南"}, {proId:"030",proName:"安徽"}, {proId:"034",proName:"江苏"},
        {proId:"071",proName:"湖北"}, {proId:"074",proName:"湖南"}, {proId:"075",proName:"江西"},
        {proId:"051",proName:"广东"}, {proId:"059",proName:"广西"}, {proId:"081",proName:"四川"},
        {proId:"086",proName:"云南"}, {proId:"085",proName:"贵州"}, {proId:"038",proName:"福建"},
        {proId:"050",proName:"海南"}, {proId:"079",proName:"西藏"}];

var Selector = React.createClass({

    getInitialState:function () {
      return{
          returndata:null,
          active:true,
          pro:{proId:'111',proName:'全国'},
      };
    },
    selectedProv:function (i) {
        console.log('i is selected!!');
        this.setState({active: !this.state.active});
        this.setState({pro:data1[i]});

      /*  this.props.setState({
            pro:data1[i].proId
        });*/

        this.props.callbackParent(data1[i].proId);
    },
    ProvList:function () {
        console.log("this is the provinces!!");
        this.setState({active:!this.state.active});
    },
    render() {
        return (
            <div className="sel_outer_div">
                <div className="sel_inner_div1">
                    <span className="sel_title">地域</span>
                </div>
                <div className="sel_inner_div2">
                    <img className="sel_img1" src={"/src/images/"+(this.state.active?'u271.png':'u284.png')}/>
                    <div className="sel_inner_div3">
                        <span className={"sel_selected"+(this.state.active?'':'_change')}>
                            {this.state.pro.proName}
                        </span>
                    </div>
                </div>
                <div className="sel_inner_div4">
                    <img className="sel_img2" src={"/src/images/"+(this.state.active?'u273.png':'u352.png')} onClick={this.ProvList}/>
                </div>
                <div className={"sel_inner_div5"+(this.state.active?'':'_change')}>
                    <img className="sel_img3" src="/src/images/u354.png"/>
                    {data1.map(function (pro,i) {
                        return(
                        <div className="sel_inner2_div1" key={i} style={{left:10+i%4*65,top:10+Math.floor(i/4)*35}}>
                            <span className="sel_span" title={pro.proId} key={i} onClick={this.selectedProv.bind(this,i)}>
                                {pro.proName}
                            </span>
                        </div>
                        );
                    },this)
                    }
                </div>
            </div>
        );
    }
});
export default Selector;
