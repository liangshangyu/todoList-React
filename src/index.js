/**
 * Created by Administrator on 2017/5/24.
 */
import React from 'react'
import ReactDom from 'react-dom'
import TodoApp from './TodoApp'
import TodoModel from './TodoModel'
let model = new TodoModel();
function render() {
    ReactDom.render(
        <TodoApp model={model}/>,document.getElementById('root')
    )
}
model.subscribe(render);
render();
/*
ReactDom.render(
    <TodoApp/>
,document.getElementById('root'))
*/
