import { Card } from '@/components'
import { Button } from 'antd'
import confetti from 'canvas-confetti'

export function OtherView() {
  function sendFireworks() {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.2 },
    })
  }

  return (
    <Card title="其他组件">
      <Button onClick={sendFireworks}>发射烟花</Button>
    </Card>
  )
}
