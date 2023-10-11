import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';



function TodoCounter() {

    const { totalTodos,completedTodos }  = useContext(TodoContext);


    if (totalTodos === completedTodos) {
        return <h1>No hay todos por hacer</h1>
    }

    return (
        <h1>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    )
}



export {
    TodoCounter
}