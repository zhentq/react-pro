import React from 'react'
import { Menu } from 'antd';
import menus from './../../router/menus'
import { useHistory } from 'react-router-dom'
const { SubMenu } = Menu;

// 获取菜单的一级key
const keyArr = []
menus.forEach(item => {
  keyArr.push(item.path)
})

// submenu keys of first level 一级子菜单键
const rootSubmenuKeys = keyArr
// console.log(rootSubmenuKeys)

const SideMenu = (props) => {
  const history = useHistory() // 组件一开始就需要执行的，不可以在事件内部执行

  const [openKeys, setOpenKeys] = React.useState([]);
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  // 函数内部使用递归
  const renderMenu = (menus) => {
    // 该函数含有 jsx 代码的返回值
    return menus.map(item => {
      if (item.children) { // 有子菜单
        return <SubMenu key={ item.path } icon={ item.icon } title={ item.title }>
          {/* 使用递归调用函数 */}
          { renderMenu(item.children) }
        </SubMenu>
      } else { // 只有一级菜单
        // 把 item.path 作为key值有好处， 当点击菜单时能获取到的属性，最容易的是key属性
        return <Menu.Item key={ item.path } icon={ item.icon }>{ item.title }</Menu.Item>
      }
    })
  }

  // 点击左侧菜单改变url地址
  const changeUrl =  (obj) => {
    // console.log(obj)
    const path = obj.key

    history.push(path)
  }

  return (
    <Menu onClick={ changeUrl } theme="dark" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
      {/* <Menu.Item key="1">Option 1</Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu> */}
      { renderMenu(menus) }
    </Menu>
  );
};

export default SideMenu