import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Button, Layout, Menu, Space} from 'antd';
import React from 'react';
import {BsFillTelephoneFill, GiHamburgerMenu} from "react-icons/all";
import Search from "antd/es/input/Search";

const {Header, Content, Sider} = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
//   key,
//   label: `nav ${key}`,
// }));

const items1 = [
  {label: 'TRANG CHỦ', key: 'item-1'}, // remember to pass the key prop
  {label: 'GIỚI THIỆU', key: 'item-2'},
  {label: 'LIÊN HỆ', key: 'item-3'},
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);
// console.log('items1', items1)
const MasterLayout: React.FC = () => (
  <Layout>
    <Header className="header flex items-center justify-between">
      {/*<div className="logo">NVT</div>*/}
      <Space>
        <img src="src/assets/images/logo.png" alt=""/>
        <Button type="primary" className={"bg-[#424B5A]  "}>
          <Space>
          Menu
          <GiHamburgerMenu/>
          </Space>
        </Button>
      </Space>

      <Search placeholder="Search" className={"custom-search"} style={{ width: 300 }} />

      <Button type="primary" className={"bg-[#424B5A]  "}>
        <Space>
          <BsFillTelephoneFill/>
          0344.70.3838
        </Space>
      </Button>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderRight: 0}}
          items={items2}
        />
      </Sider>
      <Layout style={{padding: '0 24px 24px'}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MasterLayout;
