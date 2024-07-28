import { TodoListItem } from './TodoListItem'
import type { TodoListItemInfo } from '@/types'

interface Props {
  list: TodoListItemInfo[]
  delItem: (id: string) => void
}
export function TodoList({ list, delItem }: Props) {
  const listContent = list.map ((item, index) => {
    return <TodoListItem key={item.id} info={item} sort={index} delItem={delItem}></TodoListItem>
  })

  return (
    <ul className="mt-4">
      {listContent}
    </ul>
  )
}
