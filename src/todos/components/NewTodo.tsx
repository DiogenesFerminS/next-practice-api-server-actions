'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => { 
  
  const [ description, setDescription ] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (description.trim().length === 0) {
        alert('No se puede crear un todo vacio');
    }

    await createTodo(description);
    setDescription('');
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const onDeleteCompleted = async () => {
    await deleteCompleted();
  }

  return (
    <form  
      onSubmit={onSubmit}
      className='flex w-full px-6 pb-6'>
      <input type="text"
        onChange={handleFormChange}
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all bg-white"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={onDeleteCompleted}
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete
      </button>


    </form>
  )
}