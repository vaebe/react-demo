import type { CSSProperties, FC, ReactNode } from 'react'
import { useTimer } from '@/components/message/useTimer'
import { forwardRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useStore from './useStore'
import './index.scss'

export interface MessageProps {
  style?: CSSProperties
  className?: string | string[]
  content: ReactNode | string
  duration?: number
  onClose?: (id: number) => void
  id?: number
}

const MessageItem: FC<MessageProps> = (item) => {
  const { id, duration, onClose, content } = item
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: id!,
    duration,
    remove: onClose,
  })

  return (
    <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {content}
    </div>
  )
}

export interface MessageRef {
  add: (messageProps: MessageProps) => number
  remove: (id: number) => void
  update: (id: number, messageProps: MessageProps) => void
  clearAll: () => void
}

export const MessageProvider = forwardRef<MessageRef, object>((_props, ref) => {
  const { messageList, add, update, remove, clearAll } = useStore()

  // 将 ref 转发出去
  if ('current' in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    }
  }

  // 这样写会导致某些情况 ref 为 undefined
  // useImperativeHandle(ref, () => {
  //     return {
  //         add,
  //         update,
  //         remove,
  //         clearAll
  //     }
  // }, [])

  const messageWrapper = (
    <div className="message-wrapper">
      <TransitionGroup>
        {
          messageList.map((item) => {
            return (
              <CSSTransition key={item.id} timeout={1000} classNames="message">
                <MessageItem onClose={remove} {...item}></MessageItem>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    </div>
  )

  const el = useMemo(() => {
    if (document.querySelector('.wrapper')) {
      return document.querySelector('.wrapper')!
    }

    const el = document.createElement('div')
    el.className = `wrapper`

    document.body.appendChild(el)
    return el
  }, [])

  // 将元素作为 children 渲染至指定 DOM 节点
  return createPortal(messageWrapper, el)
})
