import './CreateTodoButton.css'
export function CreateTodoButton({setOpenModal}){

    return (
        <button className='create-button' onClick={()=> setOpenModal(state => !state)}>
            ➕
        </button>
    )
}