import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

export function TodoSearch(){

  const {searchValue,setSearchValue}  = useContext(TodoContext);

  const handleChange = (event)=> {
    setSearchValue(event.target.value)
  }


  return (
      <div className="todo-search">
        <input
        type="text"
        placeholder="Buscar"
        onChange={handleChange}
        value={searchValue}
        />
      </div>
  )
}