/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import Video from './video'
import Flex from './flex'
import '../../site/css/videoes.less';
var TabContent = React.createClass({
    render(){
        const divStyle = {
            width: '100px',
            height: '100px',
            textAlign: 'center',
            fontSize: 18,
            marginLeft: '50px'
        };

        var content_data = this.props.data;

        var rolesListDatainfo = content_data.map(function (role, index) {
            return (
                <div className="col-xs-6 col-sm-4 videos-col-customer-2 videos-col-customer-1">
                    <Video role={role} key={index}/>
                </div>
            );
        })

        return (
            <div className="container-fluid video-total">
                <div className="row videos">
                    {rolesListDatainfo}
                </div>
            </div>
        );
    }
});


export default TabContent;