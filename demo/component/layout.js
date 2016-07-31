/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 单页面应用 布局组件 layout.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import React from 'react';
import {
    Flex
} from '../../src/index';

var FlexWrap = React.createClass({
    render(){
        return (
            <Flex column height="200px">
                <Flex>top</Flex>
                <Flex flex>
                    <Flex>
                        <Flex style={{background: 'red'}}>
                            <div style={{background: 'yellow'}}>left1</div>
                        </Flex>
                    </Flex>
                    <Flex flex>content</Flex>
                </Flex>
            </Flex>
        );
    }
});

class Component extends React.Component{
    render(){
        return (
            <div>
                <h1>Flex</h1>
                <FlexWrap></FlexWrap>
            </div>
        );
    }
}

export default Component;