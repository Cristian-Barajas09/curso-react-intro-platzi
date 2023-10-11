import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage (itemName,initialValue) {

    const [item,setItem] = useState(initialValue);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);


    useEffect(()=> {
        setTimeout(()=>{
            try {
                const localStorageItems = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItems) {
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItems);
                    console.log("entre");
                    setItem(parsedItem);
                }
            } catch(err) {
                setError(true);
            } finally {
                setLoading(false)
            }
        },2000)
    },[]);





    const saveItem = (newItem)=> {
        localStorage.setItem(itemName,JSON.stringify(newItem));

        setItem(newItem);
    }


    return {
        item,saveItem,loading,error
    };
}


export {
    useLocalStorage
}


// import { useEffect } from 'react';

// const defaultTodos = [
//   {text: 'terminar cursos de aluras', completed:false},
//   {text: 'terminar cursos de oracle one', completed:true},
//   {text: 'terminar cursos de react', completed:false},
//   {text: 'LALALALA', completed:false},
//   {text: 'Usar estados derivados', completed:true},

// ];

// localStorage.setItem('todos_v1',JSON.stringify(defaultTodos))
// localStorage.removeItem('todos_v1')
