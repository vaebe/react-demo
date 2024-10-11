import type { MenuProps } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '/todoList',
    label: 'todo list',
    icon: <DesktopOutlined />,
  },
  {
    key: '/ticTacToe',
    label: '井字棋',
    icon: <PieChartOutlined />,
  },
]

export default function MenuBox() {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  const defaultSelectedKeys = [useLocation().pathname]

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      defaultSelectedKeys={defaultSelectedKeys}
      mode="inline"
      items={items}
    />
  )
}
