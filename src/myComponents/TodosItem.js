import React from 'react'

export const TodosItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.name}</h4>
            <h5>{todo.Un}</h5>
            <button className="btn btn-success">Delete</button>
        </div>
    )
}
