/**
 * Created by Administrator on 2017/5/24.
 */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Item from './Item'
import Footer from './Footer'
import *  as filterTypes from   './filter-types'
export default class extends React.Component{
    constructor(props) {
        super(props)
        this.state = {todos:[
            {id:Math.random(),title:'今天学习React',completed:false},
            {id:Math.random(),title:'明天学习Vue',completed:true}
        ],
        filterType:filterTypes.ALL}
    }
    toggle=(id)=>{
        let todos = this.state.todos;
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.completed =!todo.completed
            }
            return todo
        })
        this.setState({todos})
    }
    addTodo=(todo)=>{
        todo = Object.assign({},{id:Math.random(),completed:false},todo);
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos})
    }
    remove=(id)=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index,1);
        this.setState({todos})
    }
    toggleAll=(event)=>{
        let checked = event.target.checked;
        let todos = this.state.todos
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo;
        })
        this.setState({todos})
    }
    changeFilterType=(filterType)=>{
        this.setState({filterType})
    }
    clearCompleted=()=>{
        let todos = this.state.todos
        todos = todos.filter(todo=>!todo.completed);
        this.setState({todos});
    }
    render(){
        let todos = this.state.todos;
        let showTodos = todos.filter((todo)=>{
            switch (this.state.filterType){
                case filterTypes.ACTIVE://要显示未完成的
                    return !todo.completed;
                case filterTypes.COMPLETED://完成的
                    return todo.completed;
                default:
                    return true;
            }
        })
        let activeTodoCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let main = (
            <ul className="list-group">
                {
                    todos.length>0?<li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount===0} onChange={this.toggleAll}/>{activeTodoCount===0?'全部取消':'全部选中'}
                    </li>:null
                }
                {
                    showTodos.map((todo,index)=>(
                        <Item
                        toggle={this.toggle}
                        key={index}
                        todo={todo}
                        remove={this.remove}
                        />
                    ))
                }
            </ul>
        )
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <Header addTodo={this.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-dooter">
                                <Footer activeTodoCount={activeTodoCount}
                                changeFilterType={this.changeFilterType}
                                filterType={this.state.filterType}
                                clearCompleted={this.clearCompleted}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )


    }
}