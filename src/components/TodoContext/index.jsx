import React from "react";
import { useState } from 'react';


import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoContext = React.createContext()


function TodoProvider({ children }){

    const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage('todos_v1',[]);
    const [searchValue,setSearchValue] = useState(''); // lo ideal seria que el padre maneje el estado
    const [openModal,setOpenModal] = useState(false);

    //esto de abajo se le conoce como estado heredado
    const completedTodos = todos.filter((todo)=> todo.completed).length; // !! -> no sabia que esta cosa existia
    const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo)=> {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })



  // useEffect(()=> {
  //   console.log('loooooog 2');
  // },[])

  // useEffect(()=> {
  //   console.log('loooooog 2');
  // },) -> si el array se ejecutara al final

  // useEffect(()=> {
  //   setTimeout(()=> {
  //     console.log('loooooog 2');
  //   },2000)
  // },[totalTodos])

  // console.log('log 3');


  const completeTodo = (text)=> {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo)=> todo.text === text)
    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  }

  const deleteTodo = (text)=> {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo)=> todo.text === text)

    newTodos.splice(todoIndex,1)

    saveTodos(newTodos);
  }

  const addTodo = (text)=> {
    const newTodos = [...todos];

    newTodos.push({text,completed:false});

    saveTodos(newTodos);
  }

    return (
        <TodoContext.Provider 
        value={{
            completedTodos,
            totalTodos, searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}



export { TodoContext,TodoProvider };