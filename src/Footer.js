/**
 * Created by Administrator on 2017/5/24.
 */
import React from 'react'
import * as FilterTypes from './filter-types'
export default class Footer extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-3 text-center">
                    <a href="" style={{textDecoration:'none'}}>
                        你有<span className="badge">{this.props.activeTodoCount}</span>件待办
                    </a>
                </div>
                <div className="col-xs-6 text-center">
                    <button className={`btn ${this.props.filterType === FilterTypes.ALL?'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部任务</button>
                    <button className={`btn ${this.props.filterType === FilterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
                    <button className={`btn ${this.props.filterType === FilterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-3 text-center">
                    {
                        this.props.completedTodoCount>0?<button className="btn btn-sm btn-danger" onClick={this.props.clearCompleted}>删除已完成</button>:null
                    }

                </div>
            </div>
        )
    }
}