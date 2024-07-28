'use client'
import { TodoList } from "./components/TodoList";
import { AddTodoList } from "./components/AddTodoList";
import { useState } from "react";
import { TodoListItemInfo } from '@/types'
import { v4 as uuidv4 } from 'uuid';

export const TodoListBox = () => {

  const [todoList, setTodoList] = useState<TodoListItemInfo[]>([])

  const addTodo = (content: string) => {
    setTodoList([...todoList, { id: uuidv4(), content, status: "todo" }])
  }

  const delItem = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-2 bg-amber-200">待办列表</h1>
      <AddTodoList addTodo={addTodo}></AddTodoList>

      <div className="w-10/12 mx-auto">
        <TodoList list={todoList} delItem={delItem}></TodoList>
      </div>
    </div>
  )
}
