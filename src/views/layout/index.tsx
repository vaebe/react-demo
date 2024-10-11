import { Layout, theme } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MenuBox from './menu'

const { Header, Content, Sider } = Layout
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { token: { colorBgContainer } } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <MenuBox></MenuBox>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex items-center">
          <p className="ml-2 text-2xl">react demo</p>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
