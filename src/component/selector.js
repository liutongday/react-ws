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
        this.getCommonListData(data1[i]);
    },
    ProvList:function () {
        console.log("this is the provinces!!");
        this.setState({active:!this.state.active});
    },
    getCommonListData: function(param){
        var self = this;
        //缓存数据
        var rolesListData = [{id :'1',tupian:'u797.png',name:'微信',number:'222222',jiantou:'1'},
            {id :'2',tupian:'u825.png',name:'QQ',number:'33333',jiantou:'0'},
            {id :'3',tupian:'u715.png',name:'腾讯视频',number:'44444',jiantou:'-1'},
            {id :'4',tupian:'u915.png',name:'手机淘宝',number:'55555',jiantou:'1'},
            {id :'5',tupian:'u7950.png',name:'支付宝',number:'55555',jiantou:'1'},
            {id :'6',tupian:'u7954.png',name:'爱奇艺视频',number:'55555',jiantou:'1'},
            {id :'7',tupian:'u7958.png',name:'搜狗输入法',number:'55555',jiantou:'1'},
            {id :'8',tupian:'u7962.png',name:'手机百度',number:'55555',jiantou:'-1'},
            {id :'9',tupian:'u7966.png',name:'百度地图',number:'55555',jiantou:'1'},
            {id :'10',tupian:'u7970.png',name:'爱奇艺PPS影音',number:'55555',jiantou:'1'},
            {id :'11',tupian:'u7975.png',name:'QQ音乐',number:'55555',jiantou:'1'},
            {id :'12',tupian:'u7979.png',name:'酷狗音乐',number:'55555',jiantou:'0'},
            {id :'13',tupian:'u7983.png',name:'高德地图',number:'55555',jiantou:'1'},
            {id :'14',tupian:'u7987.png',name:'PPTV聚力',number:'55555',jiantou:'1'},
            {id :'15',tupian:'u7991.png',name:'新浪微博',number:'55555',jiantou:'1'},
            {id :'16',tupian:'u7995.png',name:'腾讯手机管家',number:'55555',jiantou:'0'},
            {id :'17',tupian:'u7999.png',name:'UC浏览器',number:'55555',jiantou:'1'},
            {id :'18',tupian:'u8003.png',name:'京东',number:'55555',jiantou:'1'},
            {id :'19',tupian:'u8007.png',name:'360手机卫士',number:'55555',jiantou:'1'},
            {id :'20',tupian:'u8011.png',name:'QQ空间',number:'55555',jiantou:'-1'},];
        /*self.setState({
            returndata: rolesListData});
        console.info("############");
        console.info(self.state.returndata);
        self.props.callbackParent(rolesListData);*/
        //fectch请求
        fetch('http://10.0.94.37:8080/api/testredis',{
            credentials:'same-origin',
            method: 'POST',
            //method: 'GET',
            mode:'cors',//跨域请求
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                ///"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
            //body:param
            body:JSON.stringify(param)
            //body: JSON.parse(str)u
            //body: JSON.stringify(str)
            //body:"{name:'Hubot',login:'hubot'}"
        })
            .then(function(res) {
                console.log("Response succeeded?", JSON.stringify(res.ok));
                //console.log(res.json());
                return res.json();
            })
            .then(function(dataSource) {
                console.log(dataSource);
                console.log(self);//此时的this值已经改变（undefined）
                self.setState({
                    data: dataSource});
                self.props.callbackParent(dataSource);
                //console.log(self.props.data);
            })
            .catch(function(e) {
                console.log("fetch fail",e.toString());
                self.setState({
                    data: rolesListData});
                self.props.callbackParent(rolesListData);
            })

        /*fetch("http://blog.parryqiu.com", {
         method: 'GET',
         mode: 'no-cors',
         cache: 'default'
         }).then(function(response){console.log(response)})*/
    },
    /*componentDidMount: function() {
        this.getCommonListData();
    }*/
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
