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
    {img:"u550.png",href:"http://hao.xueui.cn/",text:"视频热词搜锁"},
    {img:"u486.png",href:"http://hao.xueui.cn/",text:"APP排行榜"},
];
class RecentAccess extends React.Component{


    rendContent(){
        return(
            <div className="ws-recentAccess-content">
                {data1.map(function (i_data,index) {
                    return(
                        <a className="ws-recentAccess-a" href={i_data.href}>
                        <div onClick={window.open('http://www.baidu.com')} className="ws-recentAccess-access">
                            <img className="ws-recentAccess-contentImg" src={"/src/images/recentAccess/"+i_data.img}/>
                            <span className="ws-recentAccess-contentText">{i_data.text}</span>
                        </div>
                        </a>
                    );
                },this)}
                <div className="ws-recentAccess-access"></div>
            </div>
        );
    }
    render(){
        var t=this;
        return(
            <div className="ws-recentAccess">
                {t.rendContent()}
            </div>
        );
    }
}

export default RecentAccess;