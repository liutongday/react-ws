/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 左侧固定导航栏 LeftNavigation.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import * as React from 'react';
import {
    Affix
} from '../../src/index';
import _ from 'underscore';
import "../css/LeftNavigation.less";

class Navigator extends React.Component {
    constructor(props) {
        super(props);
    }
    overLine (id) {
        let overLineObj = document.getElementById(id);
        overLineObj.style.display = 'inline';
        overLineObj.onMouseOver = '';
    }
    outLine(id) {
        let outLineObj = document.getElementById(id);
        outLineObj.style.display = 'none';

    }
    render() {
        const list = [{"id":"content_myportal","img_url":"../site/images/left-nav/app","content":"App排行榜"},
                {"id":"content_new","img_url":"../site/images/left-nav/new","content":"热点新闻"},
               /* {"id":"content_busi","img_url":"../site/images/left-nav/busi","content":"电商热词风云榜"},
                {"id":"content_video","img_url":"../site/images/left-nav/video","content":"视频热词风云榜"},
                {"id":"content_wechat","img_url":"../site/images/left-nav/weixin","content":"微信公众号"},
                {"id":"content_area","img_url":"../site/images/left-nav/area","content":"地域风向标"}*/];

        const jumper = _.map(list, (demo) => {
            const id = demo.id;
            const content = demo.content;
            return (
                <div>
                    <div>
                        <li >
                            <a onMouseOver={this.overLine.bind(this,id)}  href={`#${demo.id}`}>
                                <img src={`${demo.img_url}`+'.png'} className="img-size"/>
                            </a>
                            <div onMouseOut={this.outLine.bind(this,id)}  id={`${demo.id}`} className="row display_n ws-left-lab-bg">
                                <a href={'#'+`${demo.id}`+'_module'}><img src={`${demo.img_url}`+'_rep.png'} className="rep-img-size "/></a>
                                <span className="ws-left-text-marg-t"><font>{content}</font></span>
                            </div>
                        </li>
                    </div>
                </div>
            );
        });

        return(
            <ul className="ws-toc" >
                {jumper}
            </ul>
        );
    }
}

export default class LeftNavigation extends React.Component{
    render(){

        return (
            <div style={{height:window.innerHeight, width:40, backgroundColor: '#475767',position: 'fixed',zIndex:1000,marginTop:-68}}>
                <Affix offsetTop={200}>
                    <Navigator />
                </Affix>
            </div>
            
        );
    }
}





