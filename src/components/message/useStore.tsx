import type { MessageProps } from '.'
import { useState } from 'react'

function useStore() {
  const [messageList, setMessageList] = useState<MessageProps[]>([])

  return {
    messageList,
    add: (messageProps: MessageProps) => {
      const id = getId(messageProps)

      setMessageList((preState) => {
        if (messageProps?.id) {
          const index = findMessage(preState, messageProps.id)

          if (index !== -1) {
            console.warn('message id 已存在')
            return preState
          }
        }
        else {
          messageProps.id = id
        }

        return [
          ...preState,
          messageProps,
        ]
      })

      return id
    },

    update: (id: number, messageProps: MessageProps) => {
      if (!id)
        return

      setMessageList((preState) => {
        const nextState = { ...preState }
        const index = findMessage(nextState, id)

        if (index !== -1) {
          nextState[index] = {
            ...nextState[index],
            ...messageProps,
          }
        }

        return nextState
      })
    },

    remove: (id: number) => {
      setMessageList((prevState) => {
        return prevState.filter(item => item.id !== id)
      })
    },

    clearAll: () => {
      setMessageList([])
    },
  }
}

let count = 1
export function getId(messageProps: MessageProps) {
  if (messageProps.id) {
    return messageProps.id
  }
  count += 1
  return count
}

export function findMessage(messageList: MessageProps[], id: number) {
  return messageList.findIndex(item => item.id === id)
}

export default useStore
