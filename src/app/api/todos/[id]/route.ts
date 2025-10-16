import { Todo } from '@/generated/prisma';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'
import * as yup from 'yup';

interface Segments {
    params: Promise<{id: string}>
}

const getTodoById = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  return todo;
}

export async function GET(request: Request, {params}: Segments) { 

    const {id} = await params;

    const todo = await getTodoById(id);

    if (!todo) {
        return NextResponse.json({message: 'Todo not found'}, {status: 404});
    };

  return NextResponse.json(todo);
}

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional(),
});

export async function PUT(request: Request, {params}: Segments) { 

    const {id} = await params;

    const todo = await getTodoById(id);

    if (!todo) {
        return NextResponse.json({message: 'Todo not found'}, {status: 404});
    };

    try {
        const { complete, description } = await putSchema.validate(await request.json(), {
        abortEarly: false,
        stripUnknown: true
        });

        const updatedTodo = await prisma.todo.update({
            where: {id},
            data: {complete, description},
        });

        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}