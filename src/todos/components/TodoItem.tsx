'use client'
import { Todo } from "@/generated/prisma"
import { startTransition, useOptimistic } from "react"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import { toggleTodo } from "../actions/todo-actions"

interface Props {
  todo: Todo,
  // toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

const todoDoneClasses = 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'

const todoPendingClasses = 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'

const TodoItem = ({todo}: Props) => {

  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({...state, complete: newCompleteValue})
  );

  const onToggleTodo = async() => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch{
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));

    }
  }

  return (
    <div className={todoOptimistic.complete ? todoDoneClasses : todoPendingClasses }>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div
                // onClick={() => toggleTodo(todo.id, !todo.complete)}
                onClick={() => onToggleTodo()} 
                className={`
                    flex p-2 rounded-md cursor-pointer
                    hover:bg-opacity-60
                    ${ todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'}`}>
                {
                    todoOptimistic.complete
                    ? <IoCheckboxOutline size={30}/>
                    : <IoSquareOutline size={30}/>
                }
            </div>

            <div className="text-center sm:text-left">
                {todoOptimistic.description}
            </div>
            
        </div>
    </div>
  )
}

export default TodoItem