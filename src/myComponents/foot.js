import React from 'react'
import {TodosItem} from './TodosItem.js';

export const Foot = (props) => {
    return (
        <div>
            <h3 className="container card">
            { props.todos.map((todo) => {
                return <TodosItem todo = {todo} key={todo.sno} />
            }) }     
            </h3>
            copyright &copy; 
        </div>
    )
}
