/**
 * Created by Mingholy on 2017/3/27.
 */
import React from 'react';

class TodoHeader extends React.Component {

    handlerKeyUp(e) {
        if (e.keyCode === 13) {
            let value = e.target.value;
            if (!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem);
        }
    }
    
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handlerKeyUp.bind(this)} placeholder="输入任务名称，回车确认"/>
            </div>
        )
    }
}

export default TodoHeader;