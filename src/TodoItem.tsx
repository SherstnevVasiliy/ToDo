import * as React from 'react';


function TodoItem(props: { item: { deleted: any; completed: boolean | undefined; id: any; text: React.ReactNode }; handleChange: (arg0: any) => void; itemDelited: (arg0: any) => void }) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    const deletedStyle = {
        display: 'none'    
    }

    return (
        <div className="todo-item" style={props.item.deleted ? deletedStyle: undefined}>
            <div className="todo-item-text">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: undefined}>{props.item.text}</p>
            </div>
            <p 
                className="todo-delite"
                onClick={() => props.itemDelited(props.item.id)}
            >❌</p>

        </div>
    )
}

export default TodoItem