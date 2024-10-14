import type { MessageRef } from '.'
import { ConfigContext } from '@/components/ConfigProvider'
import { useContext } from 'react'

export function useMessage(): MessageRef {
  const { messageRef } = useContext(ConfigContext)

  if (!messageRef) {
    throw new Error('请在最外层添加 ConfigProvider 组件')
  }

  return messageRef.current!
}
