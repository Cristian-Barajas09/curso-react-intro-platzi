import './TodosLoading.css'



function TodoLoading(){
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <span className='LoadingTodo-text'></span>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    )
}

export {
    TodoLoading
}