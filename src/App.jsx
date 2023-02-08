import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { tasks as data } from "./data/tasks.js"
import { useEffect, useState } from 'react'

function App(){
    const [tasks, setTasks] = useState([])

    useEffect(
        () => {
            setTasks(data)
        }, []

    );
    function createtask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            description: task.description
        } ])
    }

    return (
        <div>
            <TaskForm createTask={createtask}/>
            <TaskList tasks={tasks}/>

        </div>
    )
}

export default App

