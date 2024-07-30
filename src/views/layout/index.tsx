import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { Layout, theme } from 'antd'
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
        <Header style={{ padding: 0, background: colorBgContainer }} className='flex items-center'>
          <p className=' text-2xl ml-2'>react demo</p>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
