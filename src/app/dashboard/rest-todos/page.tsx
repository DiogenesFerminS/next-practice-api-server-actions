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
    <>
      <NewTodo/>

      <TodosGrid todos={todos}/>
    </>
  )
}

export default RestTodosPage