import React, { useState } from 'react'

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index  < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }


    return (
        
        <div className='ml-[550px] mr-[500px] bg-blue-500  rounded-md mt-40 p-44 items-center'>
            <h1 className='text-4xl ml-[50px] text-white'>To-Do-List</h1>
            <div>
                <input className='rounded-md p-3' type="text" placeholder='Enter a task ...' value={newTask} onChange={handleInputChange} />
                <button className='border-spacing-1 rounded-md p-4 bg-green-500 hover:bg-green-700 ml-2 mt-5 text-white' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.length > 0 && tasks.map((tasks, index) =>
                    <li className='size-30 border p-3  flex items-center text-white justify-between mt-5' key={index}>
                        <span className='text'>{tasks}</span>
                        <button className='border-spacing-1 rounded-md p-2 bg-red-500  hover:bg-red-900 ml-2 mt- text-white' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='border-spacing-1 rounded-md p-2 bg-blue-700 hover:bg-blue-900 ml-2 mt- text-white' onClick={() => moveTaskUp(index)}>👆🏽</button>
                        <button className='border-spacing-1 rounded-md p-2 bg-blue-700 hover:bg-blue-900 ml-2 mt- text-white' onClick={() => moveTaskDown(index)}>👇🏽</button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default TodoList