import { useContext } from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css'
import { useState } from 'react';

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);
    const [newTodo,setNewTodo] = useState('');

    const handleSubmitForm = (event)=> {
        event.preventDefault();

        addTodo(newTodo);
        setOpenModal(state => !state);
    }

    const onCancel = ()=> {
        setOpenModal(false);
    }

    const handleChange = (e)=>{
        setNewTodo(e.target.value);
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmitForm}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea
                className="TodoForm-textarea"
                placeholder="escribe tu tarea aqui"
                value={newTodo}
                onChange={handleChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type='button'
                onClick={onCancel}
                >
                    cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button--add"
                type='submit'
                >
                    Crear
                </button>
            </div>
        </form>
    )
}


export {
    TodoForm
}