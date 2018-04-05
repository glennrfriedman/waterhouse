import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/Pwc-logo-880x660.png';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
  render() {
    return (
      <Header style={{ position: 'fixed', width: '100%', padding: 0 }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <img style={{ height: '55px' }} src={logo} alt="logo" />
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">
              <Icon type="home" />R&D Home
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/qre">
              <Icon type="area-chart" />QRE Comparison
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/">
              <Icon type="exception" />Surveys
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/qre">
              <Icon type="file-pdf" />Form 6765
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      // <Menu mode="horizontal">
      //   <Menu.item src={logo}>
      //     <img style={{ height: '65px' }} src={logo} alt="logo" />
      //   </Menu.item>
      //   <Menu.item>
      //     <Link to="/">
      //       <Button id="home" className="pt-minimal" icon="home" text="Home" />
      //     </Link>
      //   </Menu.item>
      //   <Menu.item>
      //     <Link to="/qre">
      //       <Button id="qre" className="pt-minimal" icon="chart" text="QRE" />
      //     </Link>
      //   </Menu.item>
      //   <Menu.item>
      //     <Button id="forms" className="pt-minimal" icon="saved" text="8949" />
      //   </Menu.item>
      //   <Menu.item>
      //     <Button id="org" className="pt-minimal" icon="mugshot" text="Organization" />
      //   </Menu.item>
      // </Menu>
    );
  }
}

export default Nav;
