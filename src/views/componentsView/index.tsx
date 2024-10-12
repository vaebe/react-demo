import { Message } from '@/components/message'
import { Button } from 'antd'
import confetti from 'canvas-confetti'

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
      <Message></Message>

      <Button onClick={sendFireworks}>发射烟花</Button>
    </div>
  )
}
