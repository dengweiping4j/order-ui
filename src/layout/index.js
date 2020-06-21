import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';


const {Header, Footer, Sider, Content} = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
  {/*      <Sider width={256} style={{minHeight: '100vh'}}>
             <div style={{height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}>

          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>一键点餐</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard"/><span>后台管理</span></span>}
            >
              <Menu.Item key="2">订餐统计</Menu.Item>
              <Menu.Item key="3">报表导出</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>*/}
        <Layout>
          <Header style={{background: '#ffffff', textAlign: 'center', padding: 0}}>
            <div>
              <img src={'/images/logo.gif'} style={{height: '60px'}}/>
              <span style={{fontFamily:'隶书',fontSize:'18px'}}> 公共技术研发中心点餐系统 v20.0.1</span>
            </div>
          </Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24,background:'#fffece', minHeight: 360}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center', margin: '55px'}}>
            dengweiping@sinobest.cn ©2020 Created by Deng Weiping</Footer>
        </Layout>
      </Layout>
    )
  }
}
