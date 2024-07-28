import { useState } from 'react'
import { Button, Input, message } from 'antd'
import { useKeyPress } from 'ahooks'

interface Props {
  addTodo: (content: string) => void
}

export function AddTodo({ addTodo }: Props) {
  const [content, setContent] = useState('')

  // 设置数据
  const setData = () => {
    addTodo(content)
    setContent('')
  }

  const [messageApi, contextHolder] = message.useMessage()

  useKeyPress('enter', () => {
    if (!content) {
      messageApi.open({
        type: 'warning',
        content: '待办内容不能为空!',
      })

      return
    }

    setData()
  })

  return (
    <div className="flex gap-2">
      {contextHolder}

      <Input value={content} onChange={e => setContent(e.target.value)} placeholder="请输入待办内容"></Input>
      <Button onClick={setData}>添加</Button>
    </div>
  )
}
