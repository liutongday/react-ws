/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 五列表格，行列相间 </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author Yelj
 * @version 1.0.0
 */
import React, {PropTypes} from 'react';
import {Table3, Column, Flex} from '../../src/index';
import styles from '../css/table-ws.less';

const data = [
    {
        排名: '1',
        热点新闻事件标题: '教育儿子被认虐童',
        媒体: '腾讯新闻',
        发表时间: "2016/05/18",
        热度: '39888',
        brief: '日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'
    },
    {
        排名: '2',
        热点新闻事件标题: '教育儿子被认虐童',
        媒体: '腾讯新闻',
        发表时间: "2016/05/18",
        热度: '39888',
        brief: '日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'
    },
    {
        排名: '3',
        热点新闻事件标题: '教育儿子被认虐童',
        媒体: '腾讯新闻',
        发表时间: "2016/05/18",
        热度: '39888',
        brief: '日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'
    },
    {
        排名: '4',
        热点新闻事件标题: '教育儿子被认虐童',
        媒体: '腾讯新闻',
        发表时间: "2016/05/18",
        热度: '39888',
        brief: '日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'
    },
    {
        排名: '5',
        热点新闻事件标题: '教育儿子被认虐童',
        媒体: '腾讯新闻',
        发表时间: "2016/05/18",
        热度: '39888',
        brief: '日前，家住河南省某县城的张先生向本台记者透露，昨日下午由于儿子放学未及时回家处于担心张先生在大街上找到儿子，并教育了一顿，没想到，被路人拍摄下来并发到了网上，还有醒目的标题“父亲虐待儿子”。张先生很是无奈，本来是一件小事...'
    },

];

function WsTable3() {

    const keys = Object.keys(data[0]);
    const aStyle = {
        width: '758px',
        display: 'block',
        textAlign: 'right',
        color: '#999C9f',
        backgroundColor: '#fBfBfB',
        height: '43px',
        fontSize: '12px',
        paddingTop: '10px',
    };
    const pstyle = {
        marginRight: '18px',
    };
    return (
        <div>
            <div>
                <Table3 data={data} className={styles.container}>
                    <Column dataKey={keys[0]} name={keys[0]} key={'col-{keys[0]}'} align='center'/>
                    <Column dataKey={keys[1]} name={keys[1]} key={'col-{keys[1]}'} align='left'/>
                    <Column dataKey={keys[2]} name={keys[2]} key={'col-{keys[2]}'} align='center'/>
                    <Column dataKey={keys[3]} name={keys[3]} key={'col-{keys[3]}'} align='center'/>
                    <Column dataKey={keys[4]} name={keys[4]} key={'col-{keys[4]}'} align='center'/>
                    <Column dataKey={keys[5]} name={keys[5]} key={'col-{keys[5]}'} align='left'/>
                </Table3>
            </div>
            <div>
               <a style={aStyle}>更多></a>
            </div>
        </div>
    );
}

export default WsTable3;