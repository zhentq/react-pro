import React from 'react'
import {
  HomeOutlined,
  PictureOutlined,
  NotificationOutlined,
  TeamOutlined,
  TableOutlined
} from '@ant-design/icons'
const menus = [
  {
    title: '系统首页',
    key: '0-0',
    path: '/home',
    icon: <HomeOutlined />,
    component: React.lazy(() => import('./../views/home/Index'))
  },
  {
    title: '轮播图列表',
    key: '0-1',
    path: '/banner',
    icon: <PictureOutlined />,
    children: [
      {
        title: '轮播图列表',
        key: '0-1-0',
        path: '/banner/list',
        component: React.lazy(() => import('./../views/banner/Index'))
      },
      {
        title: '添加轮播图',
        key: '0-1-1',
        path: '/banner/add',
        component: React.lazy(() => import('./../views/banner/Add'))
      }
    ]
  },
  {
    title: '首页数据管理',
    key: '0-2',
    path: '/homeData',
    icon: <NotificationOutlined />,
    children: [
      {
        title: '秒杀列表',
        key: '0-2-0',
        path: '/homeData/skill',
        component: React.lazy(() => import('./../views/homeData/Skill'))
      },
      {
        title: '推荐列表',
        key: '0-2-1',
        path: '/homeData/recommend',
        component: React.lazy(() => import('./../views/homeData/Recommend'))
      }
    ]
  },
  {
    title: '商品管理',
    key: '0-3',
    path: '/pro',
    icon: <TableOutlined />,
    children: [
      {
        title: '商品列表',
        key: '0-3-0',
        path: '/pro/list',
        component: React.lazy(() => import('./../views/pro/List'))
      },
      {
        title: '筛选列表',
        key: '0-3-1',
        path: '/pro/search',
        component: React.lazy(() => import('./../views/pro/Search'))
      }
    ]
  },
  {
    title: '用户管理',
    key: '0-4',
    path: '/users',
    icon: <TeamOutlined />,
    children: [
      {
        title: '用户列表',
        key: '0-4-0',
        path: '/users/list',
        component: React.lazy(() => import('./../views/users/List'))
      },
      {
        title: '管理员列表',
        key: '0-4-1',
        path: '/users/adminList',
        component: React.lazy(() => import('./../views/users/AdminList'))
      }
    ]
  }
]

export default menus