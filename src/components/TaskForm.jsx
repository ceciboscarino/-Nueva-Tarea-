import { useState } from "react"



function TaskForm({createTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
       
        createTask({
            title: title,
            description: description})
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" 
         onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Escribe la descripcion" 
         onChange={(e) => setDescription(e.target.value)} />
       
        <button>Guardar</button>
    </form>
  )
}

export default TaskForm