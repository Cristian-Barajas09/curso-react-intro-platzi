import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos'
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);
    return (
        <>
            <TodoCounter />

            <TodoSearch/>
                <TodoList>
                        {loading && (
                            <>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                            </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                        {
                            searchedTodos.map( (todo) => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onCompleted={()=> completeTodo(todo.text)}
                                onDeleted={()=> deleteTodo(todo.text)}
                            />
                            ))
                        }
                </TodoList>


            <CreateTodoButton setOpenModal={setOpenModal} />

            {
                openModal && (
                    <Modal activate={openModal}>
                        <TodoForm/>
                    </Modal>
                )
            }
        </>
    )
}



export { AppUI };