import { Card, useMessage } from '@/components'
import { Button } from 'antd'
import confetti from 'canvas-confetti'
import { useState } from 'react'

function MessafeView() {
  const message = useMessage()

  const [lastId, setLastId] = useState(0)

  function addMessage() {
    const id = message.add({
      content: '这是一条消息',
      duration: 30000,
    })

    setLastId(id)
  }

  function upDateMessage() {
    message.update(lastId, {
      content: `这是更新的消息${new Date().toISOString()}`,
      duration: 30000,
    })
  }

  function removeMessage() {
    message.remove(lastId)
  }

  function clearAllMessage() {
    message.clearAll()
  }

  return (
    <Card title="message">
      <Button onClick={addMessage}>添加提示信息</Button>
      <Button onClick={upDateMessage}>修改提示信息</Button>
      <Button onClick={removeMessage}>删除最后一个</Button>
      <Button onClick={clearAllMessage}>清除全部</Button>
    </Card>
  )
}

export default function ComponentsView() {
  function sendFireworks() {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.2 },
    })
  }

  return (
    <div>
      <Button onClick={sendFireworks}>发射烟花</Button>

      <MessafeView />
    </div>
  )
}
