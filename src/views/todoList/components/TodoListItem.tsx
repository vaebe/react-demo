import { Button } from 'antd'
import type { TodoListItemInfo } from '@/types'

interface Props {
  info: TodoListItemInfo
  sort: number
  delItem: (id: string) => void
}
export function TodoListItem({ info, sort, delItem }: Props) {
  function removeItem() {
    delItem(info.id)
  }

  return (
    <li className="flex items-center justify-between">
      <p>
        <span className="mr-2">
          {sort + 1}
          .
          {' '}
        </span>
        {info.content}
      </p>

      <Button type="link" danger onClick={removeItem}>删除</Button>
    </li>
  )
}
