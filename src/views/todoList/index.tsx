'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import type { TodoListItemInfo } from '@/types'

export default function TodoListBox() {
  const [todoList, setTodoList] = useState<TodoListItemInfo[]>([])

  const addTodo = (content: string) => {
    setTodoList([...todoList, { id: uuidv4(), content, status: 'todo' }])
  }

  const delItem = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-2 bg-amber-200">待办列表</h1>
      <AddTodo addTodo={addTodo}></AddTodo>

      <div className="w-10/12 mx-auto">
        <TodoList list={todoList} delItem={delItem}></TodoList>
      </div>
    </div>
  )
}
