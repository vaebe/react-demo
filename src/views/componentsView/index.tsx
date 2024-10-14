import { useMessage } from '@/components/message/useMessage'
import { Button } from 'antd'
import confetti from 'canvas-confetti'

function MessafeView() {
  const message = useMessage()

  function addMessage() {
    message.add({
      content: '这是一条消息',
      duration: 3000,
    })
  }

  return (
    <div>
      <Button onClick={addMessage}>添加提示信息</Button>
      <Button onClick={addMessage}>修改提示信息</Button>
    </div>
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
