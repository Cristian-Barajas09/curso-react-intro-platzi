import {  BiCheckCircle  } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx'
import './TodoItem.css'

function TodoItem({text,completed,onCompleted,onDeleted}){
    return (
        <li className="todo-item">

            <BiCheckCircle color={`${completed && 'green'}`} className='icon-svg todo-completed' onClick={onCompleted}  />
            <p className={`${completed && 'text-completed'}`}>{text}</p>
            <RxCrossCircled className='todo-delete icon-svg' onClick={onDeleted}/>
    </li>
    )
}

export {
    TodoItem
}