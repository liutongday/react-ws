/**
 * Created by Administrator on 2016/8/13.
 */
import React from 'react';
import {
    Flex,
    Title
} from '../../src/index';
window.Storage = Storage;

var Titles= React.createClass({
    getInitialState: function() {
        return {
            data: null
        };
    },
    render() {
        //debugger
        var rolesListData = [{tupian:'u10340.png',name:'APP活跃用户总排行'},];
        var rolesListDatainfo = rolesListData.map(function (role,index){
            console.info(role);
            return(
                <Title role = {role} key={index}/>
            );
        })
        return (
            <div className="title">
                {rolesListDatainfo}
            </div>
        );

    }
});
export default Titles;