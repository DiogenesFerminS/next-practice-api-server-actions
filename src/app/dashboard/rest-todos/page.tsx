export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Todos los todos',
 description: 'SEO Title',
};

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'} });
  return (
    <div className="px-6 pt-6 min-h-screen bg-gray-200">
      <NewTodo/>

      <TodosGrid todos={todos}/>
    </div>
  )
}

export default RestTodosPage