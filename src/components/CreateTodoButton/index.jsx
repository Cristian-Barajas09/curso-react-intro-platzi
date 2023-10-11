import './CreateTodoButton.css'
export function CreateTodoButton({onView}){

    return (
        <button className='create-button' onClick={onView}>
            ➕
        </button>
    )
}