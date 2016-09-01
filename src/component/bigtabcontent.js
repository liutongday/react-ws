/**
 * Created by Administrator on 2016/8/21 0021.
 */
import React from 'react';

import Apps from '../../site/component/app';
var BigTabContent = React.createClass({
    render(){
        var content_data=this.props.data;
        return (
            <div >

                <Apps/>

            </div>
        );
        /*switch (content_data.name) {
            case '1':
                return (
                    <div >
                        <WsTable9/>
                    </div>
                );
                break;
            case '2':
                return (
                    <div >
                        <WsTable9/>
                    </div>
                );
                break;
            case '3':
                return (
                    <div >
                        <WsTable9/>
                    </div>
                );
                break;
            case '4':
                return (
                    <div >
                        <WsTable9/>
                    </div>
                );
                break;
            case '5':
                return (
                    <div >
                        <WsTable9/>
                    </div>
                );
                break;
        }*/

    }
});


export default BigTabContent;