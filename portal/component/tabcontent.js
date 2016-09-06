/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';
var TabContent = React.createClass({
    render(){
        var content_data = this.props.data;
        console.log("**************88");
        console.log(content_data);
        return (
            <div className="container-img" style={{paddingLeft:20}}>
                <img src={content_data.module}/>
            </div>
        );
    }
});
export default TabContent;