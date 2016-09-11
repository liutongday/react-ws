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
 * @author luli
 * @date 2016/8/31
 */
import React from 'react';
var data1=[{img:"u486.png",href:"http://hao.xueui.cn/",text:"APP排行榜"},
    {img:"u484.png",href:"https://www.baidu.com/",text:"地域风向标"},
    {img:"u504.png",href:"http://hao.xueui.cn/",text:"电商热词搜索"},
    {img:"u492.png",href:"https://www.baidu.com/",text:"微信公众号"},
    {img:"u496.png",href:"http://hao.xueui.cn/",text:"热点新闻"},
    {img:"u500.png",href:"https://www.baidu.com/",text:"运营总览"},
];
class EasyAccess extends React.Component{
    rendBB(){
        return(
            <div>
                <div className="ws-easyAccess-bbHead">
                    <p className="ws-easyAccess-bbtext">报表中心</p>
                </div>
                <div className="ws-easyAccess-bbContent">
                    <p className="ws-easyAccess-bbPs">报表1:xxxxxxxxxx</p>
                    <p className="ws-easyAccess-bbP">报表2:xxxxxxxxxx</p>
                    <p className="ws-easyAccess-bbP">报表3:xxxxxxxxxx</p>
                    <p className="ws-easyAccess-bbP">报表4:xxxxxxxxxx</p>
                </div>
            </div>
        );
    }

    rendGN(){
        return(
            <div>
                <div className="ws-easyAccess-gnHead">
                    <p className="ws-easyAccess-bbtext">功能模块</p>
                </div>
                <div>
                    {data1.map(function (i_data,index) {
                        return(
                            <a className="ws-easyAccess-a" href={i_data.href}>
                                <div onClick={window.open('http://www.baidu.com')} className="ws-easyAccess-access">
                                    <img className="ws-easyAccess-contentImg" src={"/src/images/recentAccess/"+i_data.img}/>
                                    <span className="ws-easyAccess-contentText">{i_data.text}</span>
                                </div>
                            </a>
                        );
                    },this)}
                </div>
            </div>
        );
    }
    render(){
        var t=this;
        return(
            <div className="ws-easyAccess">
                {t.rendBB()}
                {t.rendGN()}
            </div>
        );
    }
}

export default EasyAccess;