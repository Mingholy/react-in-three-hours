/**
 * Created by Mingholy on 2017/3/27.
 */
import React from 'react';
import TodoItem from './TodoItem';

class TodoMain extends React.Component {
    render() {
        if (this.props.todos.length === 0) {
            return (
                <div className="todo-empty">目前没有任务</div>
            )
        } else {
            return (
                <ul className="todo-main">
                    {
                        this.props.todos.map((todo, index) => {
                            return <TodoItem text={todo.text} isDone={todo.isDone} key={index} index={index} {...this.props}/>
                        })
                    }
                </ul>
            )
        }
    }
}

export default TodoMain;