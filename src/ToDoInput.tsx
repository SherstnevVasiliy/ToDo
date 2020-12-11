import React from 'react';



function ToDoInput(props: { addTask: (arg0: any) => void; }){
    let myRef:any = React.createRef();

    function addNewTask() {
        props.addTask(myRef.current.value);
        return myRef.current.value = '';
    }

    return (
        <div className = ''>
            <h1 className = 'todo-list'>ToDo List</h1>
            <div className = 'newtodo'>
            <div>
                <input className = 'input-value' ref = {myRef} placeholder ='Add task...'/>
            </div>
            <div>
            <button onClick={() => addNewTask()}>Add task</button>
            </div>
            </div>   
        </div>
    );
}

export default ToDoInput;