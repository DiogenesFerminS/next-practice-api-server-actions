'use server';

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const sleep = async(seconds: number = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}

export const toggleTodo = async(id: string, complete: boolean): Promise<Todo> => {
    await sleep(3);
    const todo = await prisma.todo.findFirst({where: {id}});

    if(!todo) {
        throw new Error('Todo not found');
    };

    const updatedTodo = await prisma.todo.update({ where: {id}, data: {complete}});

    revalidatePath('/dashboard/server-todos');
    return updatedTodo;    
};

export const createTodo = async(description: string) => {
    try {
        const todo = prisma.todo.create({data:{description}});
        revalidatePath('/dashboard/server-todos');

        return todo
    } catch {
        return {message: "Creation failed"};        
    }
};

export const deleteCompleted = async() => {
    try {
    await prisma.todo.deleteMany({
    where: {complete: true}
    });
    revalidatePath('/dashboard/server-todos');
    return {message: 'Todos deleted'};
  } catch (error) {
    return {message: error};
  }
};