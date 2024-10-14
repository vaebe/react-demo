import type { PropsWithChildren, RefObject } from 'react'
import type { MessageRef } from './message'
import { createContext, useMemo, useRef } from 'react'
import { MessageProvider } from './message'

interface ConfigProviderProps {
  messageRef?: RefObject<MessageRef>
}

export const ConfigContext = createContext<ConfigProviderProps>({})

export function ConfigProvider(props: PropsWithChildren) {
  const { children } = props

  const messageRef = useRef<MessageRef>(null)

  // 使用 useMemo 来记忆值对象
  const value = useMemo(() => ({ messageRef }), [messageRef])

  return (
    <ConfigContext.Provider value={value}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  )
}
