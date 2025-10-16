export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Server - Todos',
 description: 'SEO Title',
};

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany();
  return (
    <>
      <div className="px-6 pt-6 min-h-screen bg-gray-200">
        <div className="my-2">
          <span className="text-3xl">Server Actions</span>
        </div>
        
        <NewTodo/>

        <TodosGrid todos={todos}/>
      </div>
    </>
  )
}

export default RestTodosPage