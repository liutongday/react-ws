/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
import Video from './video'
import Flex from './flex'
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
                <div className="col-md-2">
                    <Video role={role} key={index}/>
                </div>

            );
        })

        return (
            <div className="video-total">
                {/*<div className="videos">*/}
                {/*<Flex ws-flex row wrap>*/}
                {/*{rolesListDatainfo}*/}
                {/*</Flex>*/}
                {/*</div>*/}
                <div className="container-fluid">
                    <div className="videos">
                        <div className="row">
                            {rolesListDatainfo}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


export default TabContent;