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
    Flex,
    Affix
} from '../../src/index';
import _ from 'underscore';

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

        const list = [{"id":"app","img_url":"../site/images/left-nav/app","content":"App排行榜"},
                {"id":"new","img_url":"../site/images/left-nav/new","content":"热点新闻"},
                {"id":"busi","img_url":"../site/images/left-nav/busi","content":"电商热词风云榜"},
                {"id":"video","img_url":"../site/images/left-nav/video","content":"视频热词风云榜"},
                {"id":"weixinpic","img_url":"../site/images/left-nav/weixin","content":"微信公众号"},
                {"id":"area","img_url":"../site/images/left-nav/area","content":"地域风向标"}];

        const jumper = _.map(list, (demo) => {
            const id = demo.id;
            const content = demo.content;
            return (
                <div>
                    <div>
                        <li >
                            <a onMouseOver={this.overLine.bind(this,id)} className={demo.id} href={`#${demo.id}`}>
                                <img src={`${demo.img_url}`+'.png'} className="img-size"/>
                            </a>
                            <div onMouseOut={this.outLine.bind(this,id)}  id={`${demo.id}`} className="row display_n ws-left-lab-bg">
                                <img src={`${demo.img_url}`+'_rep.png'} className="rep-img-size "/>
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
            <Affix offsetTop={65}>
               <Navigator />
            </Affix>
        );
    }
}


