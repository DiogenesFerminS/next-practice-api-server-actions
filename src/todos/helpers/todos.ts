import { Todo } from "@/generated/prisma";

export const updateTodo = async(id: string, complete: boolean): Promise<Todo> => {

    const body = { complete };

    const resp = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const todo: Todo = await resp.json();
    console.log(todo); 
    return todo;
}

export const createTodo = async( description: string ): Promise<Todo> => {
    const body = {description};

    const resp = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newTodo = await resp.json();

    return newTodo;
}

export const deleteTodo = async() => {
  const resp = await fetch('/api/todos', {method: 'DELETE'});
  const result = await resp.json();
  console.log(result);
}