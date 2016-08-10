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
    render() {
        const list = [{"id":"form","img_url":"../site/images/left-nav/app.png","content":"App排行榜"},
                {"id":"switch","img_url":"../site/images/left-nav/new.png","content":"热点新闻"},
                {"id":"busi","img_url":"../site/images/left-nav/busi.png","content":"电商热词风云榜"},
                {"id":"video","img_url":"../site/images/left-nav/video.png","content":"视频热词风云榜"},
                {"id":"weixin","img_url":"../site/images/left-nav/weixin.png","content":"微信公众号"},
                {"id":"area","img_url":"../site/images/left-nav/area.png","content":"地域风向标"}];

        const jumper = _.map(list, (demo) => {
            const content = demo.content;
            return (
                <li key={demo.id}>
                    <a href={`#${demo.id}`}>
                        <img src={`${demo.img_url}`} className="img-size"/>
                    </a>
                </li>
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

