/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';


var TabContent = React.createClass({
    render(){
        const divStyle={
            width:'100px',
            height:'100px',
            textAlign:'center',
            fontSize:18,
            marginLeft:'50px'
        };
        var content_data=this.props.data;
        return (
            <div style={divStyle}>
                {content_data.name }
            </div>
        );
    }
});


export default TabContent;