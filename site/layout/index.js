/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: 主页面 index.js </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @version 1.0.0
 */
import './index.less';
import 'gm-bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="HolyGrail">
                <Header />
                <Content />
                <Footer />

            </div>

        );
    }
}

ReactDOM.render(<Page />, document.getElementById('pageContainer'));
