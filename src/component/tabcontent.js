/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';


var TabContent = React.createClass({
    render(){
        var content_data=this.props.data;
        return (
            <div>
                {content_data.name }
            </div>
        );
    }
});


export default TabContent;