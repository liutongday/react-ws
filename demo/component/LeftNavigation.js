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
        const list = [{"id":"form","content":"From"},{"id":"switch","content":"开关"}];

        const jumper = _.map(list, (demo) => {
            const content = demo.content;
            return (
                <li key={demo.id}>
                    <a href={`#${demo.id}`}>
                        {content}
                    </a>
                </li>
            );
        });
        return(
            <ul >
                {jumper}
            </ul>
        );
    }
}

export default class LeftNavigation extends React.Component{
    render(){
        return (
            <Affix offsetTop={65}>
               <Navigator className="toc" />
            </Affix>
        );
    }
}


