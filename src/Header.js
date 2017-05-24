/**
 * Created by Administrator on 2017/5/24.
 */
import React from 'react'
export default class Header extends React.Component{
    handleKeyDown=(event)=>{
        if(event.keyCode=== 13 && event.target.value!=null && event.target.value.length>0){
            let title = event.target.value;
            this.props.addTodo({title})
            event.target.value = '';
        }
    }
    render(){
        return(
                <div className="form-group">
                    <input type="text" autoFocus={true} onKeyDown={this.handleKeyDown} className="form-control" placeholder="请输入"/>
                </div>
        )
    }
}