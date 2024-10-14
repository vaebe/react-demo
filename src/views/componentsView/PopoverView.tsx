import type { CSSProperties } from 'react'
import { Card, Popover } from '@/components'
import { Button } from 'antd'

const style = {
  margin: 0,
}

function getStyle(top: number, left: number) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  } as CSSProperties
}

const content = (
  <span>
    <p style={style}>Here is the text content</p>
    <p style={style}>Here is the text content</p>
  </span>
)

function PopoverView() {
  return (
    <Card title="popover">
      <div
        style={{
          position: 'relative',
          width: 440,
          height: 280,
        }}
      >
        <Popover placement="top-start" trigger="click" content={content} style={getStyle(0, 70)}>
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" content={content} style={getStyle(0, 180)}>
          <Button>Top</Button>
        </Popover>
        <Popover placement="top-end" content={content} style={getStyle(0, 290)}>
          <Button>TR</Button>
        </Popover>
        <Popover placement="left-start" content={content} style={getStyle(60, 10)}>
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" content={content} style={getStyle(120, 10)}>
          <Button>Left</Button>
        </Popover>
        <Popover placement="left-end" content={content} style={getStyle(180, 10)}>
          <Button>LB</Button>
        </Popover>
        <Popover placement="right-start" content={content} style={getStyle(60, 350)}>
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" content={content} style={getStyle(120, 350)}>
          <Button>Right</Button>
        </Popover>
        <Popover placement="right-end" content={content} style={getStyle(180, 350)}>
          <Button>RB</Button>
        </Popover>
        <Popover placement="bottom-start" content={content} style={getStyle(240, 70)}>
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" content={content} style={getStyle(240, 180)}>
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottom-end" content={content} style={getStyle(240, 290)}>
          <Button>BR</Button>
        </Popover>
      </div>
    </Card>

  )
}

export { PopoverView }
export default PopoverView
